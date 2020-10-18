import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from './localService';


@Injectable({
  providedIn: 'root'
})
export class LocalStService {

  constructor(private router: Router,private localStorage : LocalService,) { }

  public setToken(token: string) {sessionStorage.setItem('fgh0x01b4#8', token);}
  public deleteToken() {sessionStorage.removeItem('fgh0x01b4#8');}
  public getToken() {return sessionStorage.getItem('fgh0x01b4#8')}
  public setSelectedCIA(selectedcia) {return this.localStorage.setJsonValue('CIA', selectedcia);}
  public getSelectedCia() { return this.localStorage.getJsonValue('CIA');}
  public storageCompaniesByUser(companies: any) {this.localStorage.setJsonValue('companies', JSON.stringify(companies))}
  public getCompaniesByUser(){return this.localStorage.getJsonValue('companies');}
  public getUserRol(){return localStorage.getItem('');}
  public getUserID(){return this.localStorage.getJsonValue('userID');}
  public getUser(){return this.localStorage.getJsonValue('user');}
  public getAllowUser(){return JSON.parse(this.localStorage.getJsonValue('allow'));}

  company: any[];

  public getCompanyByCompanyID(){
    let items = JSON.parse(this.getCompaniesByUser());
    let str = this.getSelectedCia();
    if(items !== null)
      this.company = items.filter(function(item){ return item.CompanyID == str});

    if(this.company.length>0)
    {
      if(this.company[0].Name.length > 13)
        return this.company[0].Name.toString().substring(0,13);
        else
        return this.company[0].Name;
    }
    else
    {
      return JSON.parse(this.localStorage.getJsonValue('companies'))[0].Name;
    }
  }

  get isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('fgh0x01b4#8');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    try {
      clearInterval(Number(sessionStorage.getItem('task')));
      clearInterval(Number(sessionStorage.getItem('task2')));
      clearInterval(Number(sessionStorage.getItem('task3')));
      clearInterval(Number(sessionStorage.getItem('task4')));
      this.router.navigate(['']);
      this.localStorage.clearToken(); 
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      
    }
  }
}
