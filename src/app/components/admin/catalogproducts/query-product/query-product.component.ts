import { CollectionChangeRecord, Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { CollectionsService } from '../../../../services/collections.service';

@Component({
  selector: 'app-query-product',
  templateUrl: './query-product.component.html',
  styleUrls: ['./query-product.component.css']
})
export class QueryProductComponent implements OnInit {

  public data: any[];

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};


  constructor(private productService: ProductService, private colleccionService: CollectionsService) { }

  ngOnInit(): void {

    this.colleccionService.Get('Products').subscribe(res => {
      this.data = res
    });

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
  }
}
