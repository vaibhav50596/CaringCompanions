import { Component, OnInit } from '@angular/core';
import {SeniorCitizen} from '../senior-citizen'
import {SENIORS} from '../mock-citizens'
import { CaringCompanionsServiceService } from '../caring-companions-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-opportunities',
  templateUrl: './find-opportunities.component.html',
  styleUrls: ['./find-opportunities.component.css']
})

export class FindOpportunitiesComponent implements OnInit {
  cards: SeniorCitizen[] = [];
  private card : String;
  

  constructor(private citizensService: CaringCompanionsServiceService, private router: Router) { }

  ngOnInit() {
    this.citizensService.getProducts().subscribe(res => {
      this.cards=res;
    },
    err => {
      console.log(err);
    })
  }

  openIndividualScreen(user: SeniorCitizen) {
    this.citizensService.userData = user;
    this.router.navigate(['/person'], {state: {data: user}});
  }
}
