import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent} from './home/home.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
//import { ClientComponent } from '../feature-module/client-module/client.component';
//import { SMEComponent } from '../feature-module/sme-module/sme.component';
//import { AdminComponent } from '../feature-module/admin-module/admin.component';

//import { FeatureRoutingModule } from '../feature-module/feature.routing';

const routes: Routes = [{
  path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,    
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class MainRoutingModule { }
