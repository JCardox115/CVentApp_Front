import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAccessRoutingModule } from './admin-access-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AdminAccessComponent } from './admin-access.component';


@NgModule({
  declarations: [AdminAccessComponent],
  imports: [
    CommonModule,
    AdminAccessRoutingModule,
    SharedModule
  ]
})
export class AdminAccessModule { }
