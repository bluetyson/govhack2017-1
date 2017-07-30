import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  public aboutUs = {
    GovHack: {
      year: 2017,
      location: "Gold Coast, QLD",
      Team: {
        name: '{"Beast Mode" : true}',
        members: [
          {
            member: "Justin Wong",
            team_captain: true,
            skillset: "Doctor, engineer, nerd.",
            caffeine_intake: "330 mg / 48h"
          },
          {
            member: "Mai Nishitani",
            skillset: "AWS Certified Queen."
          },          
          {
            member: "Bryant Wong",
            remote: true,
            location: "Houston, Texas, USA",
            skillset: "Engineer, American Ninja Warrior"
          }
        ]
      }
    }
  }

  ngOnInit() {
      }

    }
