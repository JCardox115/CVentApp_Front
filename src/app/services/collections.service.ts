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


Get(url:string) {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTkxNzEzMDMsImV4cCI6MTU5OTI1NzcwMywiaWF0IjoxNTk5MTcxMzAzfQ.q6IGzHkY_rBBNoUcSN5jebPTGwkpf5QpZUJIIk3vNGk'
    // 'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
  });
    return this.http.get<any>(`${this.API_URI}/${url}`);
  }
}
