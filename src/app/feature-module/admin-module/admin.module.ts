import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent} from './admin.component';
import { AdminRoutingModule } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent],
  exports: []
})
export class AdminModule { }
