import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { Product } from 'src/app/models/Product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderService } from '../../../services/header.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(public homeservice:HomeService, private _snackBar: MatSnackBar, public headerService:HeaderService){}

  // public GetUnits(productiId){
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'bearer '+sessionStorage.getItem('fgh0x01b4#8')
  //   });

  //   const promise = new Promise((resolve, reject) => {
  //     const apiURL =`/Products/GetUnits?companyid=${localStorage.getItem('CIA')}&ProductId=${productiId}`;
  //     this.http
  //       .get<any[]>(apiURL,{headers:headers})
  //       .toPromise()
  //       .then((res: any) => {
  //         // Success
  //         resolve(res);
  //       },
  //         err => {
  //           // Error
  //           reject(err);
  //         }
  //       );
  //   });
  //   return promise;
  // }

  addItemToCart(item: Product) {
    this.homeservice.addItemToCart(item)
    this.openSnackBar("Se agrego el producto a su carrito de compras.", "Exito!")
    this.headerService.ReloadCar();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
