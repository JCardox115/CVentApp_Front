import { Injectable } from '@angular/core';
import { Product } from '../components/admin/catalogproducts/products/services/product.object';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public TotalCarta: number = 0;
  public TotalItemsCarta: number = 0;
  public ItemsOfCart: Product[];

  constructor() { }

  public ReloadCar() {
    this.TotalCarta = 0

    this.ItemsOfCart = JSON.parse(localStorage.getItem('cart-items'));
    if (this.ItemsOfCart !== null && this.ItemsOfCart !== undefined) {
      this.TotalItemsCarta = this.ItemsOfCart.length;

      if (this.TotalItemsCarta === 0) { 
        this.TotalCarta = 0; 
      }
      this.ItemsOfCart.forEach(element => { 
        this.TotalCarta += +element["salePrice"] 
      });
      JSON.parse(localStorage.getItem('cart-items')).length;
    }
  }
}
