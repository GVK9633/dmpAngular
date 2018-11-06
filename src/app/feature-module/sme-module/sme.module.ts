import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SMEComponent } from './sme.component';
import { SMEHomeComponent } from './sme-home/sme-home.component';

import { SMERoutingModule } from './sme.routing';
import { SharedModule } from 'src/app/shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SMERoutingModule,
    SharedModule,
    RouterModule 
  ],
  declarations: [
    SMEComponent,
    SMEHomeComponent],
  providers: [],
  exports: []
})
export class SMEModule { }
