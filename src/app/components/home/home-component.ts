import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CatalogPage } from '../../models/CatalogPage';
import { HomeService } from '../../services/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderService } from '../../services/header.service';
import { HeaderComponent } from '../../template/header/header.component';
import { ProductService } from '../Products/Services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.css']
})
export class HomeComponent implements OnInit {

  page: CatalogPage =
    {
      Title1: "Productos Recomendados",
      Title2: "",
      Title3: "",
      Title4: ""
    }

  products: Product[] =
    [
      {
        ProductId: 1,
        ShortDescription: 'MOUSE RAZER',
        ProductCode: "1",
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 25000,
        OfertPercent: 0,
        Inactive: false,
        Stars: 5,
        Quantity: 100
      },
      {
        ProductId: 2,
        ShortDescription: 'Camara Kodak',
        ProductCode: "4",
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 43000,
        OfertPercent: 0,
        Inactive: false,
        Stars: 3,
        Quantity: 200
      },
 
      {
        ProductId: 3,
        ProductCode: "3",
        ShortDescription: 'TECLADO LOGITECH',
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 35000,
        OfertPercent: 0,
        Inactive: false,
        Stars: 4,
        Quantity: 50
      },

    ]

  constructor(private homeservice: HomeService, private headerService: HeaderService, public productService:ProductService) {
    this.headerService.ReloadCar();

  }

  ngOnInit(): void {}


}