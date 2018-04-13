import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }
  
  makeId(): string {
    const dateNow = new Date();
    const time = dateNow.getTime();
    const random = Math.round(Math.random()*1000);
    const id = `${time}${random}`;
    return id;
  }

  setProperties(prop:Object){
    let properties = this.getProperties();
    const arr = [];
    if (!properties){
       arr.push(prop);
       sessionStorage.setItem('properties', JSON.stringify(arr));
       return;
    }
    properties.forEach(item => arr.push(item));
    arr.push(prop);
    sessionStorage.setItem('properties', JSON.stringify(arr));
  }

  getProperties(){
    return JSON.parse(sessionStorage.getItem('properties'));
  }

}
