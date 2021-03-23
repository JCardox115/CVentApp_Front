import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductComponent } from './components/Products/view-product/view-product.component';
import { HomeComponent } from './components/home/home-component';
import { CartComponent } from './components/cart/cart.component';
import { PreCheckoutComponent } from './components/cart/pre-checkout/pre-checkout.component';
import { LoginComponent } from './components/security/login/login.component';
import { RegisterComponent } from './components/security/register/register.component';
import { ProductComponent } from './components/admin/products/product.component';


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
    component: ProductComponent,
  }
  //|||||---------------------ADMIN-------------------------|||||

  
//|||||---------------------AUTH-------------------------||||||
{
  path: 'auth/signin',
  component: LoginComponent,
},
{
  path: 'auth/signup',
  component: RegisterComponent,
},
//|||||---------------------AUTH-------------------------|||||
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }