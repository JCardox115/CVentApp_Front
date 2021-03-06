import { Component, OnInit } from '@angular/core';
import { CatalogPage } from '../../models/CatalogPage';
import { HomeService } from '../../services/home.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeaderService } from '../../services/header.service';
import { HeaderComponent } from '../../template/header/header.component';
import { CollectionsService } from 'src/app/services/collections.service';
import { ProductsService } from '../admin/catalogproducts/products/services/product.service';


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

  products: any[];

  constructor(
    private collectionService: CollectionsService, 
    private homeservice: HomeService, 
    private headerService: HeaderService, 
    public productService: ProductsService) {
    this.collectionService.Get('Products').subscribe(res => {
      this.products = res;
    });
    this.headerService.ReloadCar();
  }

  ngOnInit(): void {
  }
}