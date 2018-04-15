import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Position } from '../interfaces/position.interface'
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  url:string = 'http://api.nestoria.co.uk/api?country=uk&pretty=1' +
               '&action=search_listings&encoding=json&listing_type=buy' +
               '&callback=JSONP_CALLBACK';
                
  constructor(private jsonp:Jsonp) { }
  
  getResponse(location:string, page:number){
     const link = `${this.url}&page=${page}&place_name=${location}`; 

    return this.jsonp.request(link)
                .map(res =>{
                  return res.json().response;
                })
  }
  // getResponseWithMyLocation(){
  //   const link = `${this.url}&page=1&centre_point=${this.location.latitude},${this.location.longitude}`;
  //   return this.jsonp.request(link)
  //             .map(res => res.json().response);
  // }

  //  getCurrentPossition(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(position => {
  //       this.location = position.coords;
  //     });
  //  }
  // }

  
}
