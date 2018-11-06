import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SMEHomeComponent } from './sme-home/sme-home.component';
import { SMEComponent } from './sme.component';

const routes: Routes = [
  {
    path: 'sme', component: SMEComponent,
    children: [
      { path: 'home', component: SMEHomeComponent },
      { path: '', redirectTo: 'home', pathMatch:'full' }   
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class SMERoutingModule { }
