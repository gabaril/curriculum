import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetencesComponent } from './competences.component';
import {CompetencesRoutingModule} from './competences-routing.module';



@NgModule({
  declarations: [CompetencesComponent],
  imports: [
    CommonModule,
    CompetencesRoutingModule
  ]
})
export class CompetencesModule { }
