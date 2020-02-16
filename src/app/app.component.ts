import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CaringCompanionsServiceService } from './caring-companions-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaringCompanions';
  volunteerData;

  constructor(public router: Router, private citizensService: CaringCompanionsServiceService){
    console.log(router.url)
    this.volunteerData = undefined;
    this.citizensService.getState().subscribe(res => {
      if(res) {
        this.volunteerData = res;
      }
    })
  }

  clearData() {
    this.volunteerData = undefined;
  }
  
}
