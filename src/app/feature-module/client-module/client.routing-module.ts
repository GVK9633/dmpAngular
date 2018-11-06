import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientComponent } from './client.component';

const routes: Routes = [
  {
    path: 'client', component: ClientComponent,
    children: [
      { path: 'home', component: ClientHomeComponent },
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
export class ClientRoutingModule { }
