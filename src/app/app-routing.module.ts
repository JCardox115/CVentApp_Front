import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AppSpecificCanActivateGuard, AuthGuardService } from './app-core/guards';
import { ViewProductComponent } from './components/Products/view-product/view-product.component';
import { HomeComponent } from './components/home/home-component';
import { CartComponent } from './components/cart/cart.component';
import { PreCheckoutComponent } from './components/cart/pre-checkout/pre-checkout.component';
import { CreateEditProductComponent } from './components/admin/catalogproducts/create-edit-product/create-edit-product.component';
import { QueryProductComponent } from './components/admin/catalogproducts/query-product/query-product.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-product/:id',
    component: ViewProductComponent,
  },

  {
    path: 'view-product/:id/pre-checkout',
    component: PreCheckoutComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'cart/pre-checkout',
    component: PreCheckoutComponent,
  },

//|||||---------------------ADMIN-------------------------||||||
  {
    path: 'admin/manage-products',
    component: QueryProductComponent,
  },
  {
    path: 'admin/manage-products/new',
    component: CreateEditProductComponent,
  },



  //|||||---------------------ADMIN-------------------------|||||
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}