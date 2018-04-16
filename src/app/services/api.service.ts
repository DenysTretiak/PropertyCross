import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  url:string = 'http://api.nestoria.co.uk/api?country=uk&pretty=1' +
               '&action=search_listings&encoding=json&listing_type=buy' +
               '&callback=JSONP_CALLBACK';
  location: {lat, lng} = {lat: 50.3888825, lng: 30.490123999999998};
       
  constructor(private jsonp:Jsonp) { }
  
  getResponse(location:string, page:number = 1){
     const link = `${this.url}&page=${page}&place_name=${location}`;
    return this.jsonp.request(link)
                .map(res =>{
                  return res.json().response;
                })
  }

  getResponseWithMyLocation(){
        const link = `${this.url}&page=1&centre_point=${this.location.lat},${this.location.lng}`;
        return this.jsonp.request(link)
             .map(res => res.json().response);
  }

  getCurrentPossition() {
    navigator.geolocation.getCurrentPosition(position => {
            this.location.lat = position.coords.latitude;
            this.location.lng = position.coords.longitude;
    });
  }
  
}
