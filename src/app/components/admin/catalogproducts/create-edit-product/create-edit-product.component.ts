import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, RequiredValidator } from '@angular/forms';
import { CollectionsService } from '../../../../services/collections.service';
import { HeaderService } from 'src/app/services/header.service';
import { HomeService } from 'src/app/services/home.service';
import { TypeID } from 'src/app/models/TypeID';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { ApiService } from '../../../../services/api.service';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-edit-product',
  templateUrl: './create-edit-product.component.html',
  styleUrls: ['./create-edit-product.component.css']
})
export class CreateEditProductComponent implements OnInit {

  createEditProductForm: FormGroup;
  submitted = false;
  loading: boolean = false;

  countries: any[];
  states: any[];
  cities: any[];

  typeIDs: TypeID[] =
    [
      { ID: 11, Description: '11-REGISTRO CIVIL', Inactive: false },
      { ID: 12, Description: '12-TARJETA DE INDENTIDAD', Inactive: false },
      { ID: 13, Description: '13-CEDULA DE CIUDADANIA', Inactive: false },
      { ID: 21, Description: '21-TARJETA DE EXTRANJERIA', Inactive: false },
      { ID: 22, Description: '22-CEDULA DE EXTRANJERIA', Inactive: false },
      { ID: 31, Description: '31-NUMERO DE IDENTIFICACION TRIBUTARIA', Inactive: false },
      { ID: 41, Description: '41-PASAPORTE', Inactive: false },
      { ID: 42, Description: '42-DOCUMENTO DE IDENTIFICACION EXTRANJERO', Inactive: false },
      { ID: 43, Description: '43-SIN IDENTIFICACION DEL EXTERIOR O PARA USO DEFINIDO POR LA DIAN', Inactive: false },
      { ID: 44, Description: '44-DOCUMENTO DE IDENTIFICACION EXTRANJERO PERSONA JURIDICA', Inactive: false },
      { ID: 46, Description: '46-CARNE DIPLOMATICO', Inactive: false },
    ]

  constructor(private api: ApiService, private collectionService: CollectionsService, private formBuilder: FormBuilder, public headerservice: HeaderService, public homeservice: HomeService) {
    this.homeservice.getAgrupedItemsOfCar();
    this.headerservice.ReloadCar();
  }

  ngOnInit(): void {
    this.collectionService.Get('Countrys').subscribe(res => {
      this.countries = res;
    })

    this.collectionService.Get('States').subscribe(res => {
      this.states = res;
    })

    this.collectionService.Get('Cities').subscribe(res => {
      this.cities = res;
    })

    this.createEditProductForm = this.formBuilder.group({
      productID: [0],
      code: [''],
      companyID: [0],
      description: [''],
      groupCode: [''],
      familyCode: [''],
      uOMCode: [''],
      isInventoryable: [false],
      quantity: [0],
      cost: [0],
      salePrice: [0],
      tax: ['1001'],
      picture: [''],
      gLTransactionID: [''],
      gLAccountingCode: [''],
      inactive: [false],
      createdAt: [new Date()],
      modifyDate: [new Date()],
      modifiedBy: ['SYSTEM'],
      createdBy: ['SYSTEM'],
      shortDescription: [''],
      stars: [5]
    });
  }

  get f() { return this.createEditProductForm.controls }

  onSubmit() {
    this.loading = true;
    this.submitted = true;

    if (this.createEditProductForm.invalid) {
      this.loading = false;
      return;
    }

    this.api.Post('Products', this.createEditProductForm.value).subscribe(res => {
      if (res.categoryMessageTag === 'Success') {
        Swal.fire({
          title: 'Se guardo el registro de manera exitosa',
          onOpen: (objmessage) => {
            objmessage.addEventListener('mouseenter', Swal.stopTimer);
            objmessage.addEventListener('mouseleave', Swal.resumeTimer);
          }
        });
        this.createEditProductForm.reset();
      }
    });
  }

  loadImage() {

  }
}