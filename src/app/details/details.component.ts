import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  house:Object;
  houses:Object[];
  id:string;

  constructor(private user: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(item => this.id = item['id']);
    this.user.getProperties().forEach(item =>{
      if (item.id === this.id){
        this.house = item;
      }
    })
  }

}