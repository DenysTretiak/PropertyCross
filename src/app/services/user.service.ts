import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class UserService {
  backButton = new BehaviorSubject(JSON.parse(sessionStorage.getItem('backButton')));
  
  makeId(): string {
    const dateNow = new Date();
    const time = dateNow.getTime();
    const random = Math.round(Math.random()*1000);
    const id = `${time}${random}`;
    return id;
  }

  setProperties(prop:any, favourite?:boolean){
    let properties = this.getProperties();
    const arr = [];
    if (!properties){
       arr.push(prop);
       sessionStorage.setItem('properties', JSON.stringify(arr));
       return;
    }
    if(favourite || favourite === false){
      properties.forEach(item => {
        if(item.title !== prop.title){
          arr.splice(arr.indexOf(item), 1);
        } 
      });
      prop.favourite = favourite;
    }
    properties.forEach(item => {
      if(item.title !== prop.title){
        arr.push(item)
      } 
    });
    arr.push(prop);
    sessionStorage.setItem('properties', JSON.stringify(arr));
  }

  getProperties(){
    return JSON.parse(sessionStorage.getItem('properties'));
  }

  setLastSearches(location:string){
     let searches = this.getLastSearches();
     const arr = [];
     if(!searches){
         arr.push(location); 
         sessionStorage.setItem('lastSearches', JSON.stringify(arr));
         return;
     }
     searches.forEach(item => arr.push(item));
     arr.push(location);
     sessionStorage.setItem('lastSearches', JSON.stringify(arr));
  }

  getLastSearches(){
    return JSON.parse(sessionStorage.getItem('lastSearches'));
  }

  getFavourites(){
    if (!this.getProperties()) return;
    return this.getProperties().filter(prop => prop.favourite);
  }

}
