import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URI = 'http://localhost:5000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


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
