import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaringCompanionsServiceService } from '../caring-companions-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router, private citizensService: CaringCompanionsServiceService) { }

  ngOnInit() {
  }

  openFindOpportunities(key) {
    if(key == 'arsalan') {
      const arsalanData = {
        "volunteer_name": "Arsalan",
        "volunteer_email":"afard@ucalgary.ca",
        "time_slot": "None",
        "senior_citizen": {},
        "interests": ["music", "chess", "photography", "games", "reading", "sleeping"]
      }
      this.citizensService.changeState(arsalanData);
      this.router.navigate(['/findOpportunitites'], {state: {data: arsalanData}});
    } else if (key == 'vaibhav') {
      const vaibhavData = {
        "volunteer_name": "Vaibhav",
        "volunteer_email":"vaibhav.jadhav@ucalgary.ca",
        "time_slot": "None",
        "senior_citizen": {},
        "interests": ["helping kids", "knitting", "politics", "poetry", "home building'", "design", "cooking"]
      }
      this.citizensService.changeState(vaibhavData);
      this.router.navigate(['/findOpportunitites'], {state: {data: vaibhavData}});
    }
  }
}
