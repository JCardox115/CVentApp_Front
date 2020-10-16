import { Product } from '../../../models/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CollectionsService } from '../../../services/collections.service';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewProductComponent implements OnInit {


  product:Product
  productImagesArray : string [];
  relatedproducts: any[] =
    [
      {
        ProductId: 2,
        ProductCode : "2",
        ShortDescription: 'Camara Kodak',
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 43000,
        OfertPercent: 0,
        Inactive: false,
        Stars:3,
        Quantity:200
      }
    ]

  constructor(public apiService:ApiService, public productService:ProductService, public collectionsService:CollectionsService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.apiService.GetByID('Products', params.id)
        .subscribe(
          res => {
            this.product = res;
            this.productImagesArray = this.product.pictures.split('££/$$%^$[[]]');
            if(this.productImagesArray.length === 0) {
              this.productImagesArray[0] = this.product.pictures;
            }
          },
          err => console.log(err)
        )
    }
  }

  get qtyStarts(){
    return new Array(this.product.stars);
  }

  get qtyUnits(){
    return new Array(this.product.quantity);
  }
}
