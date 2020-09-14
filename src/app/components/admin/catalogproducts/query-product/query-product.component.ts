import { CollectionChangeRecord, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { CollectionsService } from '../../../../services/collections.service';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { _MatTabLinkBase } from '@angular/material/tabs';

@Component({
  selector: 'app-query-product',
  templateUrl: './query-product.component.html',
  styleUrls: ['./query-product.component.css']
})
export class QueryProductComponent implements OnInit {
  dtOptions: any = {};
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  public data: any[];
  constructor(private productService: ProductService, private colleccionService: CollectionsService,
    private elRef: ElementRef,
    private router: Router,
    private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getProducts()

        
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      columns:
        [
          {
            title: 'Acciones',
            className: 'notranslate',
            render: function (data: any, type: any, full: any) {
              return '<button type="button" class="btn btn-icon btn-rounded fas fa-edit" edit-data-id="' + full.productID + '"></button>';
            }
          }
        ]
    };
  }


  public getProducts() {
    try {
      this.colleccionService.Get('Products').subscribe(res => {
        this.data = res;
      });
    } catch (error) {
      Swal.fire('Notificación', error, 'warning');
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
