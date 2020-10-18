import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalService } from './localService';

@Injectable({
  providedIn: 'root'
})
export class UserSecurityService {

    constructor(
      private localStorage : LocalService,
      private config: ConfigService,
      private http: HttpClient, 
      private router: Router  
    ) { }
  //OBTENER SEGURIDAD DE USUARIO POR COMPAÑÍA POR ID
  getUserSecurityByCompanyByID(id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    });
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/UserSecurity/GetUserSecurityByCompanyByID?companyid=${
this.localStorage.getJsonValue('CIA')}&userid=${id}`;
      this.http
        .get<any[]>(apiURL,{headers:headers})
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
  //AGREGAR SEGURIDAD POR COMPAÑÍA POR ID
  postUserSecurity(item){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    });
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/UserSecurities/PostUserSecurity`;
      this.http
        .post<any[]>(apiURL,JSON.stringify(item),{headers:headers})
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
  //ACTUALIZAR SEGURIDAD POR COMPAÑÍA POR ID
  putUserSecurity(id,item){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    });
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/UserSecurities/PutUserSecurity/${id}`;
      this.http
        .put<any[]>(apiURL,JSON.stringify(item),{headers:headers})
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
}
