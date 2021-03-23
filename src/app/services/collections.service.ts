import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  API_URI = 'http://localhost:5000/api'

  constructor(private http: HttpClient,
    private router: Router) { }


  GetList(url: string) {
    return this.http.get<any[]>(`${this.API_URI}/${url}`);
  }

  Get(url: string) {
    return this.http.get<any>(`${this.API_URI}/${url}`);
  }
}
