import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { ForecastCarouselComponent } from './forecast-carousel/forecast-carousel.component';
import { ForecastComponent } from './forecast/forecast.component';

import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { ModelPerformanceComponent } from './model-performance/model-performance.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ForecastCarouselItemComponent } from './forecast-carousel/forecast-carousel-item/forecast-carousel-item.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { AboutComponent } from './about/about.component';



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
      {
        path: 'definitions',
        component: DefinitionsComponent
      },
      {
        path: 'about',
        component: AboutComponent
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
    AppLayoutComponent,
    ForecastCarouselItemComponent,
    DefinitionsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
