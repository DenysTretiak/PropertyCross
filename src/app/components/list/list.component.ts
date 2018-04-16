import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../services/user.service';
import { House } from '../../interfaces/house.interface'
import 'rxjs/add/operator/take';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  houses:House[];
  location:string;
  numberHouses:number;
  noResults:boolean = false;
  resultsReady:boolean = false;
  currentPage:number = 1;

  constructor(private api:ApiService,
              private user:UserService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
     this.getHousesList();
  }

  getHousesList(){
    this.route.params.subscribe(param => {
      if(param.location){
        this.api.getResponse(param.location, this.currentPage)
              .map(item =>{
                this.numberHouses = item.total_results;
                return item.listings;
              }) 
              .subscribe(item => {
                if(this.houses){
                  this.houses = this.houses.concat(item);
                  this.resultsReady = true;
                  return
                }
                this.houses = item;
                this.resultsReady = true;
                this.setNoResults(item);
              })
      }
      if(param.favourites){
        this.resultsReady = true;
        this.houses = this.user.getFavourites();
        this.setNoResults(this.houses);
      }
      if(param.myLocation){
        this.api.getCurrentPossition();
        this.api.getResponseWithMyLocation()
                .map(item => {
                  this.numberHouses = item.total_results;
                  return item.listings
                })
                .subscribe(item=>{
                  this.houses = item;
                  this.resultsReady = true;
                  this.setNoResults(item);
                })
      }
    });
  }

  setNoResults(item:any){
    if(!item || item.length === 0){
        this.noResults = true;
      }
  }

  openDetailsPage(house:any){
    const properties = this.user.getProperties();
    let updateProperties = true;

    if(properties){
      properties.forEach(item =>{
        if (item.title === house.title){
            this.router.navigate([`/details/${item.id}`]);
            updateProperties = false;
        }
      });
    }
    
    if(updateProperties){
        house.id = this.user.makeId();
        house.favourite = false;
        this.user.setProperties(house);
        this.router.navigate([`/details/${house.id}`]);
  }      
  }

  getMoreProperty(){
    this.resultsReady = false;
    this.currentPage++
    this.getHousesList();
  }
}
