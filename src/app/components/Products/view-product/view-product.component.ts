import { Product } from '../../../models/Product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewProductComponent implements OnInit {

  relatedproducts: Product[] =
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
      },

      {
        ProductId: 3,
        ProductCode : "3",
        ShortDescription: 'TRES',
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 35000,
        OfertPercent: 0,
        Inactive: false,
        Stars:4,
        Quantity:50
      },
      {
        ProductId: 3,
        ProductCode : "3",
        ShortDescription: 'TRES',
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 35000,
        OfertPercent: 0,
        Inactive: false,
        Stars:4,
        Quantity:50
      },
      {
        ProductId: 3,
        ProductCode : "3",
        ShortDescription: 'TRES',
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 35000,
        OfertPercent: 0,
        Inactive: false,
        Stars:4,
        Quantity:50
      }
    ]


  product: Product =
    {
      ProductId: 1,
      ProductCode : "1",
      ShortDescription: "asdasd",
      LongDescription: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      Stars: 4,
      UnitPrice: 45000,
      OfertPercent: 5,
      Quantity: 10,
      Picture: ["https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512", "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512", "https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512"],
      Inactive: false
    }
  
  constructor(public productService:ProductService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    // if (params.id) {
    //   this.productService.getGame(params.id)
    //     .subscribe(
    //       res => {
    //         console.log(res);
    //         this.game = res;
    //         this.edit = true;
    //       },
    //       err => console.log(err)
    //     )
    // }
  }

  get qtyStarts(){
    return new Array(this.product.Stars);
  }

  get qtyUnits(){
    return new Array(this.product.Quantity);
  }
}
