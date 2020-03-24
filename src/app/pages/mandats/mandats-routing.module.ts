import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MandatsComponent} from './mandats.component';


const routes: Routes = [
  {
    path: '',
    component: MandatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandatsRoutingModule { }
