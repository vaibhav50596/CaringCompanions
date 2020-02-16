import { Component, OnInit } from '@angular/core';
import {SeniorCitizen} from '../senior-citizen'
import {SENIORS} from '../mock-citizens'
import { CaringCompanionsServiceService } from '../caring-companions-service.service';


@Component({
  selector: 'app-find-opportunities',
  templateUrl: './find-opportunities.component.html',
  styleUrls: ['./find-opportunities.component.css']
})

export class FindOpportunitiesComponent implements OnInit {
  cards
  private card : String;

  constructor(private citizensService: CaringCompanionsServiceService) { }

  ngOnInit() {
    this.citizensService.getProducts().subscribe(res => {
      this.cards=res;
    },
    err => {
      console.log(err);
    })
  }
}
