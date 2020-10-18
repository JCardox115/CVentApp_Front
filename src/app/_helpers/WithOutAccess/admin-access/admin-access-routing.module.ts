import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAccessComponent } from './admin-access.component';
import { AuthService } from 'src/app/services/auth.service';


const routes: Routes = [
  {
    path:'',
    component: AdminAccessComponent, canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAccessRoutingModule { }
