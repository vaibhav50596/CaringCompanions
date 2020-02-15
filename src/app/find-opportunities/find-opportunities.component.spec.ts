import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOpportunitiesComponent } from './find-opportunities.component';

describe('FindOpportunitiesComponent', () => {
  let component: FindOpportunitiesComponent;
  let fixture: ComponentFixture<FindOpportunitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindOpportunitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
