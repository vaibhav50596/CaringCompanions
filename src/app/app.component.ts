import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CaringCompanionsServiceService } from './caring-companions-service.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CaringCompanions';
  volunteerData;

  constructor(public router: Router, private citizensService: CaringCompanionsServiceService,
    location: PlatformLocation){
    console.log(router.url)
    this.volunteerData = undefined;
    this.citizensService.getState().subscribe(res => {
      if(res) {
        this.volunteerData = res;
      }
    })
    location.onPopState(() => {
      this.citizensService.isHit = false;
    }); 
  }

  clearData() {
    this.volunteerData = undefined;
    this.citizensService.isHit = false;
  }
  
}
