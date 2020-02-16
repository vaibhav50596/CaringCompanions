import { Component, OnInit } from '@angular/core';
import {SeniorCitizen} from '../senior-citizen'
import {SENIORS} from '../mock-citizens'
import { CaringCompanionsServiceService } from '../caring-companions-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-find-opportunities',
  templateUrl: './find-opportunities.component.html',
  styleUrls: ['./find-opportunities.component.css']
})

export class FindOpportunitiesComponent implements OnInit {
  cards: SeniorCitizen[] = [];
  private card : String;
  state$: Observable<object>;
  loginData;

  constructor(private citizensService: CaringCompanionsServiceService, private router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.citizensService.getProducts().subscribe(res => {
      this.cards=res;
    },
    err => {
      console.log(err);
    })
    this.getLoginDetails();
  }

  getLoginDetails() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
    
      this.state$.subscribe(res => {
      if(res) {
        this.loginData = res['data'];
        console.log(this.loginData);
      }
    })
  }

  getMatchedSeniors(){
    this.citizensService.getMatchedSeniors(this.loginData.volunteer_name).subscribe(res => {
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
