import { Component, OnInit, Input, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-forecast-carousel-item',
  templateUrl: './forecast-carousel-item.component.html',
  styleUrls: ['./forecast-carousel-item.component.css']
})


export class ForecastCarouselItemComponent implements OnInit {

  private _hospital_utilisation;
  private _hospital_utilisation_predictions: any;
  public today = new Date();
  public doughnutChartOptions = {};
  public doughnutChartLabels: string[];
  public doughnutChartType: string = 'doughnut';

  public chartColors: any[] = [
    {
      backgroundColor: ["Red", "Orange", "Gold", "Limegreen", "Green"]
    }];

  @Input() hospital_utilisation
  set(value) {
    this._hospital_utilisation = value;
  }
  get() {
    return this._hospital_utilisation;
  }



  constructor() { }

  ngOnInit() {
    this.doughnutChartLabels = 
    [`Cat 1 (${Math.round(this.hospital_utilisation.stats.avg_triage_1)})`, 
    `Cat 2 (${Math.round(this.hospital_utilisation.stats.avg_triage_2)})`,
    `Cat 3 (${Math.round(this.hospital_utilisation.stats.avg_triage_3)})`,
    `Cat 4 (${Math.round(this.hospital_utilisation.stats.avg_triage_4)})`,
    `Cat 5 (${Math.round(this.hospital_utilisation.stats.avg_triage_5)})`]
  }

  ngOnAfterViewInit() {
    this.doughnutChartOptions = {
      legend: {
        position: 'left'
      },
      tooltips: {
        enabled: false
      }
    };

  }


  public descriptor(score_above: number, score_below: number): string {
    var desc: string = "";

    if (score_above) { desc = "Busy" };
    if (score_below) { desc = "Fair" };
    if (!(score_above || score_below)) { desc = "Average" };

    return desc;
  }

  public image(prediction): string {
    var img: string = "";
    if (prediction.score_above) { img = "../../assets/thunderstorm.png" };
    if (prediction.score_below == 1) { img = "../../assets/sunny.png" };
    if (!(prediction.score_above || prediction.score_below)) { img = "../../assets/partlycloudy.png" };
    return img
  }

  public getTriageData(stats: any) {
    return [stats.avg_triage_1,
    stats.avg_triage_2,
    stats.avg_triage_3,
    stats.avg_triage_4,
    stats.avg_triage_5];
  }



}
