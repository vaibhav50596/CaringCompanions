import { Component, OnInit, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-individual-component',
  templateUrl: './individual-component.component.html',
  styleUrls: ['./individual-component.component.css']
})
export class IndividualComponent implements OnInit {

  state$: Observable<object>;
  data;
  defaultDate = new Date();
  //@ViewChildren(Calendar) public cals: Calendar[];

  constructor(public activatedRoute: ActivatedRoute) {
    this.defaultDate.setHours(10);
    this.defaultDate.setMinutes(15);
   }

  ngOnInit() {
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state))
    
      this.state$.subscribe(res => {
      if(res) {
        this.data = res['data'];
        console.log(res)
      }
    })
  }

  // ngAfterViewInit() {
  //   this.cals.forEach(calendar => {
  //     let elem = calendar.inputfieldViewChild.nativeElement;
  //     elem.addEventListener('click', () => {
  //       if (!elem.value) {
  //         calendar.initTime(new Date());
  //       }
  //     });
  //   });
  // }

}
