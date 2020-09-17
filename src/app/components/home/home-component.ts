import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CatalogPage } from '../../models/CatalogPage';
import { HomeService } from '../../services/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderService } from '../../services/header.service';
import { HeaderComponent } from '../../template/header/header.component';
import { ProductService } from '../../services/product.service';


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

  products: any[] =
    [
      {
        companyID: 1,
        groupCode: 'na',
        familyCode: 'na',
        uOMCode: 'as',
        isInventoryable: true,
        cost: 25000,
        gLTransactionID: '11',
        gLAccountingCode: '12',
        tax: '5',
        productID: 3,
        code: "3",
        shortDescription: 'TECLADO LOGITECH',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        salePrice: 35000,
        inactive: false,
        stars: 4,
        quantity: 40
      }
    ]

  constructor(private homeservice: HomeService, private headerService: HeaderService, public productService: ProductService) {
    this.headerService.ReloadCar();

  }

  ngOnInit(): void { }


}