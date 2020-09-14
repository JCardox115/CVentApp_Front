import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  API_URI = 'http://localhost:5000/api'

  constructor(private http: HttpClient,
    private router: Router) { }


  Get(url: string) {
    return this.http.get<any[]>(`${this.API_URI}/${url}`);
  }
}
