import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'qui-suis-je'
  },
  {
    path: 'qui-suis-je',
    loadChildren: () => import('./pages/presentation/presentation.module').then(m => m.PresentationModule)
  },
  {
    path: 'competences',
    loadChildren: () => import('./pages/competences/competences.module').then(m => m.CompetencesModule)
  },
  {
    path: 'formation',
    loadChildren: () => import('./pages/formations/formations.module').then(m => m.FormationsModule)
  },
  {
    path: 'experience',
    loadChildren: () => import('./pages/experience/experience.module').then(m => m.ExperienceModule)
  },
  {
    path: 'mandats',
    loadChildren: () => import('./pages/mandats/mandats.module').then(m => m.MandatsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
