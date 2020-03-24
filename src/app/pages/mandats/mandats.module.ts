import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MandatsComponent } from './mandats.component';
import {MandatsRoutingModule} from './mandats-routing.module';



@NgModule({
  declarations: [MandatsComponent],
  imports: [
    CommonModule,
    MandatsRoutingModule
  ]
})
export class MandatsModule { }
