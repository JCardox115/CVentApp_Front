import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { LocalService } from './localService';
const API_URI = 'http://localhost:5000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private localStorage : LocalService,
    ) { }


  //REGISTRO DE USUARIOS
  register(item){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    });
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Account/signup`;
      this.http
        .post<any>(apiURL,JSON.stringify(item), {headers:headers})
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
  //REGISTRO DE USUARIOS
  DecodeAccess(token){
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Users/DecodeAccess?token=${token}`;
      this.http
        .get<any>(apiURL)
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
  //PREGUNTO POR TOKEN
  AskForToken(item){
    //var userData = "username=" + item.email + "&password=" + item.password + "&grant_type=password";
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Public/AskForAccess`;
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
  //GUARDAR TOKEN
  SaveToken(item,loginrequest){
    let TokenCompany = {Companies:'',AccessToken:item.access_token,EmailAddress:loginrequest.email,ExpiresIn:item['.expires'],Password:loginrequest.password};
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
      const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Public/SaveAccess`
      this.http
        .post<any[]>(apiURL,JSON.stringify(TokenCompany),{ headers: headers })
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
  //GENERAR TOKEN
  token(loginrequest){
    var userData = "username=" + loginrequest.email + "&password=" + loginrequest.password + "&grant_type=password";
    var newTokenHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','No-Auth':'True' });
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getToken()}`;
      this.http
        .post<any[]>(apiURL,userData,{ headers: newTokenHeader })
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
  //GENERAR INFORMACIÓN DE USUARIOs
  getUserData(loginrequest){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    })
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Users/GetUserData`;
      this.http
        .post<any>(apiURL,JSON.stringify(loginrequest), {headers:headers})
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
  getUserDataByID(id){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    })
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Users/GetUserDataByCompanyByID?companyid=${this.localStorage.getJsonValue('CIA')}&id=${id}`;
      this.http
        .get<any>(apiURL, {headers:headers})
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
  //CAMBIAR CONTRASEÑA
  ChangePassword(item){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    })
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Users/ChangePassword`;
      this.http
        .post<any>(apiURL,JSON.stringify(item), {headers:headers})
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
  //CAMBIAR CONTRASEÑA
  MailConfirm(item){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
    })
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Users/MailConfirm`;
      this.http
        .post<any>(apiURL,JSON.stringify(item), {headers:headers})
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
  //CAMBIAR CONTRASEÑA
  passwordRecovery(item){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    const promise = new Promise((resolve, reject) => {
      const apiURL =`${this.config.getUrl()}/Users/PasswordRecovery`;
      this.http
        .post<any>(apiURL,JSON.stringify(item), {headers:headers})
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

  Post(method: string, object: any) {
    return this.http.post<any>(`${API_URI}/${method}`, object);
  }

  Update(method: string, object: any) {
    return this.http.put<any>(`${API_URI}/${method}`, object);
  }

  Delete(method: string, id: number) {
    return this.http.delete<any>(`${API_URI}/${method}/${id}`);
  }

  GetByID(method: string, id: number) {
    return this.http.get<any>(`${API_URI}/${method}/${id}`);
  }
}
