import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { IconComponent } from './components/shared/components/icon/icon.component';
import { IconAppComponent } from './components/shared/components/icon-app/icon-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { SubmenuComponent } from './template/submenu/submenu.component';
import { CarouselComponent } from './template/carousel/carousel.component';
import { FooterComponent } from './template/footer/footer.component';
import { ViewProductComponent } from './components/Products/view-product/view-product.component';
import { HomeComponent } from './components/home/home-component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NumericStepperComponent } from './template/numeric-stepper/numeric-stepper.component';
import { CartComponent } from './components/cart/cart.component';
import { PreCheckoutComponent } from './components/cart/pre-checkout/pre-checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateEditProductComponent } from './components/admin/catalogproducts/create-edit-product/create-edit-product.component';
import { QueryProductComponent } from './components/admin/catalogproducts/query-product/query-product.component';
import { SidebarAdminComponent } from './template/sidebar-admin/sidebar-admin.component';
import {DataTablesModule} from 'angular-datatables';
import { MatPaginatorModule} from '@angular/material/paginator';
import {  MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconComponent,
    IconAppComponent,
    SubmenuComponent,
    CarouselComponent,
    HomeComponent,
    FooterComponent,
    ViewProductComponent,
    NumericStepperComponent,
    CartComponent,
    PreCheckoutComponent,
    CreateEditProductComponent,
    QueryProductComponent,
    SidebarAdminComponent,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
