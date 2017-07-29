import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

title = 'Govhack2017 - Emergency Department Load Forecast';

  public hospital_utilisation_aggregates = [];

  constructor(private dataService : DataService){
    
  }

  public ngOnInit(){
    this.dataService.getHospitalAggregates()
    .subscribe(data => {
      this.hospital_utilisation_aggregates = data;
    })
  }

}

