import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchField:FormControl;
  constructor(private api:ApiService, private router:Router){

  }

  searchList: string[] = [
    'search 1',
    'search 2',
    'search 3'
  ]

  ngOnInit(){
    // this.searchField = new FormControl();
    // this.searchField.valueChanges
    //     .subscribe(item => console.log(item)); 
  }

  onSubmit(location:string){
    this.router.navigate(['/list', {location}] );
    // this.api.getTranslate(value);
  }

}
