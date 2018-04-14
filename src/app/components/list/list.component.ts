import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../../services/user.service';
import { House } from '../../interfaces/house.interface'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  houses:House[];
  location:string;
  noResults:boolean = false;
  resultsReady:boolean = false;

  constructor(private api:ApiService,
              private user:UserService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      if(param.location){
        this.api.getResponse(param.location)
              .subscribe(item => {
                this.houses = item;
                this.resultsReady = true;
                this.setNoResults(item);
              })
      }
      // if(param.myLocation){
      //     this.api.getResponseWithMyLocation()
      //             .subscribe(item=> {
      //               console.log(item);
      //             })
      // }
      if(param.favourites){
        this.resultsReady = true;
        this.houses = this.user.getFavourites();
        this.setNoResults(this.houses);
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
}
