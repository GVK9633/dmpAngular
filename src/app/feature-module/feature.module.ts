import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientModule } from './client-module/client.module';
import { AdminModule } from './admin-module/admin.module';
import { SMEModule } from './sme-module/sme.module';

import { FeatureRoutingModule } from './feature.routing';

@NgModule({
  imports: [
    CommonModule,    
    ClientModule,
    AdminModule,
    SMEModule,
    FeatureRoutingModule,
    RouterModule
  ],
  declarations: [],
  exports: []
})
export class FeatureModule { }
