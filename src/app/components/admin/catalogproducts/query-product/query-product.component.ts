import { CollectionChangeRecord, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { CollectionsService } from '../../../../services/collections.service';
import Swal from 'sweetalert2';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query-product',
  templateUrl: './query-product.component.html',
  styleUrls: ['./query-product.component.css']
})
export class QueryProductComponent implements OnInit {
  dtColumnSearchingOptions: any = {};
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  public data: any[];

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};


  constructor(private productService: ProductService, private colleccionService: CollectionsService,
    private elRef: ElementRef,
    private router: Router,
    private renderer: Renderer2) { }

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

  public getTranDocType() {
    try {
      const that = this;
      this.dtColumnSearchingOptions = {
        ajax: (dataTablesParameters: any, callback) => {
          this.colleccionService.Get('Products')
            .subscribe(
              res => {
                callback({
                  recordsTotal: 10,
                  recordsFiltered: '',
                  data: that
                });
              }
            );
        },
        columns: [{
          title: 'ID',
          data: 'TranDocTypeID',
          className: 'notranslate'
        }, {
          title: 'Nombre',
          data: 'TranDocTypeDesc',
          className: 'notranslate'
        }, {
          title: 'Tipo',
          data: 'TranType',
          className: 'dt-body-center notranslate'
        }, {
          title: 'Estado',
          data: 'Inactive',
          className: 'notranslate',
          render: function (data: any, type: any, full: any) {
            let estado = full.Inactive === true ? 'checked' : '';
            if (estado)
              return '<div class="checkbox checkbox-primary checkbox-fill m-r-10" style="display: table;margin-top: -29px;"><input type="checkbox" id="switch-a-2" value=' + estado + ' readonly="readonly" ' + estado + ' onclick="javascript: return false;"><label for="switch-a-2" class="cr" style="font-size:0px">' + full.Process + '</label></div>'
            else
              return '<div class="checkbox checkbox-primary checkbox-fill d-inline m-r-10"><input type="checkbox" id="switch-a-2" value=' + estado + ' readonly="readonly" ' + estado + ' onclick="javascript: return false;"><label for="switch-a-2" class="cr" style="font-size:0px">' + full.Process + '</label></div>'
          }
        }, {
          title: 'Acciones',
          className: 'notranslate',
          render: function (data: any, type: any, full: any) {
            return '<button type="button" class="btn btn-icon btn-rounded fas fa-edit" edit-data-id="' + full.TranDocTypeID + '"></button>';
          }
        }],
        scrollY: "250px",
        scrollCollapse: true,
        responsive: true,
        dom: 'lBfrtip',
        buttons: [
          'copy',
          'print',
          'excel',
          'pdf'
        ]
      };
    } catch (error) {
      Swal.fire('Notificación', error, 'warning');
    }
  }
}
