import { Injectable } from '@angular/core';
import { Jsonp, Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  url:string = 'http://api.nestoria.co.uk/api?country=uk&pretty=1' +
               '&action=search_listings&encoding=json&listing_type=buy' +
               '&page=1&number_of_results=40&place_name=';
 
  private searchUrl: string = 'http://api.nestoria.co.uk/api?country=uk' +
  '&pretty=1&action=search_listings&encoding=json' +
  '&listing_type=buy&callback=JSONP_CALLBACK';

  constructor(private jsonp:Jsonp, private http:Http ) { }
  
  getTranslate(location:string){
     const link = this.url + location; 
     return this.http.get(link)
        .map(res => {
             console.log(res.json().response.total_results) 
             return res.json().response.listings;
        });
}
}
