import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ForecastCarouselComponent } from './forecast-carousel/forecast-carousel.component';
import { ForecastComponent } from './forecast/forecast.component';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { ModelPerformanceComponent } from './model-performance/model-performance.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';



const appRoutes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'forecast',
        pathMatch: 'full'
      },
      {
        path: 'forecast',
        component: ForecastComponent
      },
      {
        path: 'model-performance',
        component: ModelPerformanceComponent
      },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    ForecastCarouselComponent,
    ModelPerformanceComponent,
    ForecastComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
