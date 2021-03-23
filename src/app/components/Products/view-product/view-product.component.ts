import { Router, ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CollectionsService } from '../../../services/collections.service';
import { ApiService } from 'src/app/services/api.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
import { LocalStService } from 'src/app/services/local-st.service';
import { Product } from '../../admin/catalogproducts/products/services/product.object';
import { ProductsService } from '../../admin/catalogproducts/products/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewProductComponent implements OnInit , AfterViewInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[] = [];

  product: Product
  productImagesArray: string[];
  relatedproducts: any[] =
    [
      {
        ProductId: 2,
        ProductCode: "2",
        ShortDescription: 'Camara Kodak',
        LongDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamqu.',
        Picture: ['https://cdn.shopify.com/s/files/1/0070/7032/files/camera_56f176e3-ad83-4ff8-82d8-d53d71b6e0fe.jpg?v=1527089512'],
        UnitPrice: 43000,
        OfertPercent: 0,
        Inactive: false,
        Stars: 3,
        Quantity: 200
      }
    ]

  constructor(
    public apiService: ApiService, 
    public productService: ProductsService, 
    public collectionsService: CollectionsService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private localStService: LocalStService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.apiService.GetByID('Products', params.id)
        .subscribe(
          res => {
            this.product = res;
            this.productImagesArray = this.product.pictures.split('££/$$%^$[[]]');
            if (this.productImagesArray.length === 0) {
              this.productImagesArray[0] = this.product.pictures;
            }
          },
          err => console.log(err)
        )
    }

    this.galleryOptions = [
      {
        width: '800px',
        height: '600px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }

  ngAfterViewInit(){
    this.productImagesArray.forEach(element => {
      this.galleryImages.push(
        {
          small: element,
          medium: element,
          big: element
        });
    });
  }

  get qtyStarts() {
    return new Array(this.product.stars);
  }

  get qtyUnits() {
    return new Array(this.product.quantity);
  }

  buy(item:any) {

    //Si esta logueado
    if(this.localStService.getUser() !== undefined) {

    } else {
    //acceder o crear cuenta

    
    }
  }
}
