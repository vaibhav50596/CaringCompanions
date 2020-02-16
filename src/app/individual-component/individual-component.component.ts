import { Component, OnInit, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { CaringCompanionsServiceService } from '../caring-companions-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-individual-component',
  templateUrl: './individual-component.component.html',
  styleUrls: ['./individual-component.component.css']
})
export class IndividualComponent implements OnInit {

  state$: Observable<object>;
  data;
  defaultDate = new Date();
  myGroup: FormGroup;
  emailResponse: string = '';

  constructor(public activatedRoute: ActivatedRoute, private citizensService: CaringCompanionsServiceService) {
    this.defaultDate.setHours(10);
    this.defaultDate.setMinutes(15);
   }

  createFormGroup() {
    this.myGroup = new FormGroup({
      timeSlot: new FormControl()
   });
   this.myGroup.controls['timeSlot'].setValue(this.data.timeslots[0], {onlySelf: true});
  }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
    
      this.state$.subscribe(res => {
      if(res) {
        this.data = res['data'];
        this.createFormGroup();
        console.log(res)
      }
    })
  }

  postVolunteerRequest(data) {
    this.emailResponse = '';
    const volunteerObject = {
      "volunteer_name": this.citizensService.volunteerData['volunteer_name'],
      "volunteer_email": this.citizensService.volunteerData['volunteer_email'],
      "senior_citizen": data,
      "time_slot": this.myGroup.controls['timeSlot'].value
    }
    this.citizensService.postVolunteerRequest(volunteerObject).subscribe(res => {
      if(res) {
        console.log(res);
        this.emailResponse = res['message'];
      }
    }, err => {
      console.log(err);
    });
  }

}
