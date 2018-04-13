import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router'
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  houses:any;
  location:string;
  constructor(private api:ApiService,
              private user:UserService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(param => this.location = param.location);
    this.houses = this.api.getTranslate(this.location);
  }

  openDetailsPage(house:any){
       if (!house.id){
           house.id = this.user.makeId();
       }
       this.user.setProperties(house);
       this.router.navigate([`/details/${house.id}`]);
       console.log(house);
      //  this.router.navigate(['/list', {location}] );
  }

}
