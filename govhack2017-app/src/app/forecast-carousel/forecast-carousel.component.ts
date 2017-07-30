import { Component, OnInit, Input } from '@angular/core';
//import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-forecast-carousel',
  templateUrl: './forecast-carousel.component.html',
  styleUrls: ['./forecast-carousel.component.css']
})
export class ForecastCarouselComponent implements OnInit {

  constructor() { }

  private _hospital_utilisation_predictions: any;
  public today = new Date();
  public doughnutChartOptions = {};
  //public tomorrow = today.add

  @Input() hospital_utilisation_predictions
  set(value: any) {
    this._hospital_utilisation_predictions = value;
  }

  ngOnInit() {
    this.doughnutChartOptions = {
      legend: {
        position: 'right'
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

  // Doughnut
  public doughnutChartLabels: string[] = ['Cat 1', 'Cat 2', 'Cat 3', 'Cat 4', 'Cat 5'];
  public doughnutChartType: string = 'doughnut';

  public chartColors: any[] = [
    {
      backgroundColor: ["Red", "Orange", "Gold", "Limegreen", "Green"]
    }];
}
