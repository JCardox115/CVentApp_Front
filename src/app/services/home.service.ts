import { Injectable, ɵConsole } from '@angular/core';
import { Product } from '../models/Product';
import { ProductGrouping } from '../models/ProductGrouping';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() {
    this.getAgrupedItemsOfCar();
  }

  public itemsOfCar: Product[] = [];
  public AgrupedCart: ProductGrouping[] = [];
  public ItemToAdd: ProductGrouping

  addItemToCart(item: any) {
    let LSitemscart = <Product[]>JSON.parse(localStorage.getItem('cart-items') || '[]')

    if (LSitemscart !== null && LSitemscart !== undefined) {
      LSitemscart.push(item)

      localStorage.removeItem('cart-item')
      localStorage.setItem('cart-items', JSON.stringify(LSitemscart))
    }
    else {
      localStorage.setItem('cart-items', JSON.stringify(item))
    }
  }

  getAgrupedItemsOfCar() {
    this.itemsOfCar = <Product[]>JSON.parse(localStorage.getItem('cart-items') || '[]')
    this.AgrupedCart = [];
    let acumuladorIndices = '';
    while (this.itemsOfCar !== undefined && this.itemsOfCar.length > 0) {
      if (this.itemsOfCar !== null && this.itemsOfCar !== undefined) {
        this.itemsOfCar.every(i => {
          acumuladorIndices = '';
          let ProductosConMismoID = this.itemsOfCar.filter(x => { return x.ProductId == i.ProductId });

          if (ProductosConMismoID.length > 0 && ProductosConMismoID !== null && ProductosConMismoID !== undefined) {
            ProductosConMismoID.forEach(producto => {
              acumuladorIndices += this.itemsOfCar.indexOf(producto) + ",";
            });

            if (acumuladorIndices.length > 0 && acumuladorIndices !== null && acumuladorIndices !== undefined)
              acumuladorIndices = acumuladorIndices.slice(0, -1);

            let ProductToAddToCartAgruped = new ProductGrouping();
            ProductToAddToCartAgruped.ProductId = ProductosConMismoID[0].ProductId;
            ProductToAddToCartAgruped.TotalItems = ProductosConMismoID.length;
            ProductToAddToCartAgruped.TotalByItem = ProductosConMismoID[0].UnitPrice * ProductosConMismoID.length;
            ProductToAddToCartAgruped.Description = ProductosConMismoID[0].ShortDescription;
            ProductToAddToCartAgruped.Picture = ProductosConMismoID[0].Picture[0];
            this.AgrupedCart.push(ProductToAddToCartAgruped);
            return false;
          }
          return true;
        });

        //Elimina productos repetidos de la carta
        if (acumuladorIndices.length > 0 && acumuladorIndices !== null && acumuladorIndices !== undefined) {
          var ItemsToIterate = acumuladorIndices.split(',');
          let control: number = 0;
          ItemsToIterate.forEach(x => {
            if (control > 0)
              this.itemsOfCar.splice(+x - control, 1);
            else
              this.itemsOfCar.splice(+x, 1);
            control++;
          })
        }
      }
    }
  }
}