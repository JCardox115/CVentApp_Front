import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //
  IP = '';//'https://ws.amazonaserp.com/';
  TOKEN_URI= 'Token';
  API_URI = 'api';
  PUBLIC_URI = 'public';

  currentUser = {};
  
  constructor() { }

  getUrl() {
    return this.IP+this.API_URI;
  }
  getToken(){
    return this.IP+this.TOKEN_URI;
  }
  getPublic(){
    return this.IP+this.PUBLIC_URI;
  }
}