import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseListComponent } from '@appcore/baselist.component';
import { MessageService } from '@appcore/services/message.service';
import { Product } from './services/product.object';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from './services/product.service';
import { ProductModalComponent } from './modals/product.modal.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-admin-products',
  templateUrl: './product.component.html'
})
export class ProductComponent extends BaseListComponent<Product> implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listProduct: Product;
  displayedColumns: string[] = ['code', 'description', 'picture', 'action'];
  public data: any;
  public dataSource: MatTableDataSource<Product>;

  constructor(
    readonly productService: ProductsService,
    readonly modalService: NgbModal,
    readonly messageService: MessageService) {
    super(productService, modalService, messageService);
  }

  ngOnInit() {
    this.$Modal = ProductModalComponent;
    this.getProducts()
  }

  onDelete(item: Product) { this.Delete(item.productID); }

  public getProducts() {
    try {
      this.productService.get().subscribe(res => {
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
