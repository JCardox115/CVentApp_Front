import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderService } from 'src/app/services/header.service';
import { HomeService } from 'src/app/services/home.service';
import { CollectionsService } from '../../../services/collections.service';
import Swal from 'sweetalert2';
import { TypeID } from '../../../models/TypeID';

@Component({
  selector: 'app-pre-checkout',
  templateUrl: './pre-checkout.component.html',
  styleUrls: ['./pre-checkout.component.css']
})
export class PreCheckoutComponent implements OnInit {

  preCheckOutForm: FormGroup;
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
  
    this.preCheckOutForm = this.formBuilder.group({
      CompanyID: [''],
      Name: [''],
      DocumentID: [''],
      TypeID: [''],
      LastName: ['', Validators.maxLength(200)],
      TradeName: ['', [Validators.required, Validators.maxLength(100)]],
      CIIUCode: ['', [Validators.required]],
      CountryID: ['0', Validators.required],
      StateID: ['0', Validators.required],
      CityID: ['0', Validators.required],
      Address: ['', [Validators.required, Validators.maxLength(100)]],
      Address2: ['', [Validators.required, Validators.maxLength(100)]],
      PhoneNum: ['', [Validators.required, Validators.maxLength(50)]],
      EMailAddress: ['', [Validators.required, Validators.maxLength(100), Validators.email]],
      CurrencyCode: ['', [Validators.required, Validators.maxLength(8)]],
      FactE: [0],
    });
  }

  get f() { return this.preCheckOutForm.controls }

  onSubmit() {
    this.loading = true;
    this.submitted = true;

    if (this.preCheckOutForm.invalid) {
      this.loading = false;
      return;
    }
  }
}