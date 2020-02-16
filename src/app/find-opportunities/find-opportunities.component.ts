import { Component, OnInit } from '@angular/core';
import {SeniorCitizen} from '../senior-citizen'
import { CaringCompanionsServiceService } from '../caring-companions-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { cloneDeep, union, uniqBy } from 'lodash';

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
  wholeData;

  constructor(private citizensService: CaringCompanionsServiceService, private router: Router,
    public activatedRoute: ActivatedRoute) {
    }

  ngOnInit() {
    this.cards = undefined;
    this.getLoginDetails();
  }

  getLoginDetails() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
    
      this.state$.subscribe(res => {
      if(res) {
        this.loginData = res['data'];
        if(this.loginData['volunteer_name'] == 'General' && !this.citizensService.isHit) {
          this.getAllSeniors();
        } else if (!this.citizensService.isHit) {
          this.getMatchedSeniors();
        }
        console.log(this.loginData);
      }
    })
  }

  getMatchedSeniors(){
    this.citizensService.isHit = true;
    this.cards = undefined;
    this.citizensService.getMatchedSeniors(this.loginData.volunteer_name).subscribe(res => {
      if(res) {
        this.cards = uniqBy(res, '_id');
        this.wholeData = [];
        this.wholeData = cloneDeep(this.cards);
      }
    },
    err => {
      console.log(err);
    })
  }

  getAllSeniors() {
    this.citizensService.isHit = true;
    this.cards = undefined;
    this.citizensService.getProducts().subscribe(res => {
      if(res) {
        this.cards = uniqBy(res, '_id');
        this.wholeData = [];
        this.wholeData = cloneDeep(this.cards);
      }
    },
    err => {
      console.log(err);
    })
  }

  openIndividualScreen(user: SeniorCitizen) {
    this.citizensService.isHit = false;
    this.citizensService.userData = user;
    this.citizensService.volunteerData = this.loginData;
    this.router.navigate(['/person'], {state: {data: user}});
  }
}
