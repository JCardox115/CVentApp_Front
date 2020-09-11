import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HeaderService } from '../../services/header.service';
import { Product } from 'src/app/models/Product';
import { ProductService } from '../Products/Services/product.service';
import Swal from 'sweetalert2'
import { MessageAlert } from '../../app-core/core/objects/massage.alert.object';
import { SweetAlertIcon } from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {

  @Input() btnSiguienteVisible : boolean = true;
  @Input() imgProductVisible : boolean = true;

  constructor(public homeservice: HomeService, public headerservice: HeaderService) { this.homeservice.getAgrupedItemsOfCar(); this.headerservice.ReloadCar(); }
  ngOnInit(): void { }
  RemoveItem(item: any) {
    let LSitemscart = <Product[]>JSON.parse(localStorage.getItem('cart-items') || '[]')
    if (LSitemscart !== null && LSitemscart !== undefined && LSitemscart.length > 0) {
      var itemToCart = LSitemscart.filter(x => x.ProductId !== item.ProductId);
      if (itemToCart !== null && itemToCart !== undefined) {
        localStorage.removeItem('cart-items')
        localStorage.setItem('cart-items', JSON.stringify(itemToCart))

        this.homeservice.getAgrupedItemsOfCar();
        this.headerservice.ReloadCar();
      }
    }
  }
  
  ValidateExistency(productid, valor) { }
  swal() { Swal.fire('Info', 'La cantidad ingresada es mayor a la cantidad disponible.', 'success') }
}