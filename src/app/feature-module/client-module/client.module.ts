import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientRoutingModule } from './client.routing-module';
import { Ng5SliderModule } from 'ng5-slider';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng5SliderModule,
    RouterModule,
    ClientRoutingModule
  ],
  declarations: [ClientComponent,
    ClientHomeComponent
  ],
  providers: [],
  exports: []
})
export class ClientModule { }
