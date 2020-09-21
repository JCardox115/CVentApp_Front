import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CollectionsService } from '../../../../services/collections.service';
import { HeaderService } from 'src/app/services/header.service';
import { HomeService } from 'src/app/services/home.service';
import { TypeID } from 'src/app/models/TypeID';

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

  typeIDs : TypeID[] =
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

  constructor(private collectionService: CollectionsService, private formBuilder: FormBuilder, public headerservice: HeaderService, public homeservice: HomeService) {
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
      productID       : [''],
      code            : [''],
      companyID       : [''],
      description     : [''],
      groupCode       : [''],
      familyCode      : [''],
      uOMCode         : [''],
      isInventoryable : [''],
      quantity        : [''],
      cost            : [''],
      salePrice       : [''],
      tax             : [''],
      picture         : [''],
      gLTransactionID : [''],
      gLAccountingCode: [''],
      inactive        : [''],
      createdAt       : [''],
      modifyDate      : [''],
      modifiedBy      : [''],
      createdBy       : [''],
      shortDescription: [''],
      stars           : ['']
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
  }

  loadImage(){

  }
}