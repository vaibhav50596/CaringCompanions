import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openFindOpportunities(key) {
    if(key == 'arsalan') {
      this.router.navigate(['/findOpportunitites'], {state: {data: null}});
    } else if (key == 'vaibhav') {
      this.router.navigate(['/findOpportunitites'], {state: {data: null}});
    }
  }
}
