import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { CollectionsService } from '../../../../services/collections.service';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { _MatTabLinkBase } from '@angular/material/tabs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatHeaderRow } from '@angular/material/table';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-query-product',
  templateUrl: './query-product.component.html',
  styleUrls: ['./query-product.component.css']
})
export class QueryProductComponent implements OnInit,  AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['code', 'description', 'picture', 'action'];
  public data: Product[];
  public dataSource: MatTableDataSource<Product>;

  constructor(private productService: ProductService, private colleccionService: CollectionsService,
    private elRef: ElementRef,
    private router: Router,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts() {
    try {
      this.colleccionService.Get('Products').subscribe(res => {
        this.data = res;
        this.dataSource = new MatTableDataSource(this.data);
      });
    } catch (error) {
      Swal.fire('Notificación', error, 'warning');
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
