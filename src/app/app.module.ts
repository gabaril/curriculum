import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ConnaissancesComponent} from './pages/connaissances/connaissances.component';
import {ExperienceComponent} from './pages/experience/experience.component';
import {FormationsComponent} from './pages/formations/formations.component';
import {MandatsComponent} from './pages/mandats/mandats.component';
import {PresentationComponent} from './pages/presentation/presentation.component';
import { LayoutComponent } from './pages/layout.component';
import { LangageComponent } from './pages/langage/langage.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ConnaissancesComponent,
    ExperienceComponent,
    FormationsComponent,
    MandatsComponent,
    PresentationComponent,
    LayoutComponent,
    LangageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
