import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FeatureModule } from '../feature-module/feature.module';
import { MainRoutingModule } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule,
    MainRoutingModule,
    RouterModule    
  ],
  declarations: [MainComponent,
    HomeComponent,
    AccessDeniedComponent,
    PageNotFoundComponent],
  exports: [MainComponent,
    HomeComponent,
    AccessDeniedComponent,
    PageNotFoundComponent]
})
export class MainModule { }
