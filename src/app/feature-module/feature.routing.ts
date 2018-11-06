import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//import { ClientRoutingModule } from './client-module/client.routing-module';
//import { AdminRoutingModule } from './admin-module/admin.routing';
//import { SMERoutingModule } from './sme-module/sme.routing';

import { ClientComponent } from './client-module/client.component';
import { SMEComponent } from './sme-module/sme.component';
import { AdminComponent } from './admin-module/admin.component';

const routes: Routes = [  
    { path: 'client', component: ClientComponent },
    { path: 'sme', component: SMEComponent },
    { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    //ClientRoutingModule,
    //AdminRoutingModule,
    //SMERoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class FeatureRoutingModule { }
