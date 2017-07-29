import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import * as moment from 'moment';

@Injectable()
export class DataService {

  constructor(
    private http : Http
  ) { 

  }

  getHospitalAggregates(){
    return this.http.get("http://54.66.215.142:8080/data/hospital_utilisation_aggregates")
    .map(res => res.json())   // first convert to JSON
    //.map(body => body);    
  }

  getHospitalPrecitions(){
    return this.http.get("http://54.66.215.142:8080/data/hospital_utilisation_predicted")
    .map(res => res.json())   // first convert to JSON
      
  }

}
