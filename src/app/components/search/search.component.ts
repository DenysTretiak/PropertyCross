import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router'
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchField:FormControl;
  searchList: string[];

  constructor(private api:ApiService, 
              private router:Router,
              private user:UserService){

  }

  ngOnInit(){
    this.searchList = this.user.getLastSearches();
    sessionStorage.setItem('backButton', JSON.stringify(false));
  }

  onSubmit(location:string){
    if(location.length>0){
      this.router.navigate(['/list', {location}] );
    }
    this.api.getResponse(location)
             .subscribe(item=> {
              console.log(item);
                    if(item.length>0){
                      this.user.setLastSearches(location);
                    }      
              });
  }

  searchHouses(item:string){
       this.router.navigate(['/list', {location:item}] );
  }


}
