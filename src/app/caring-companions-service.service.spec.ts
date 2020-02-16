import { TestBed } from '@angular/core/testing';

import { CaringCompanionsServiceService } from './caring-companions-service.service';

describe('CaringCompanionsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaringCompanionsServiceService = TestBed.get(CaringCompanionsServiceService);
    expect(service).toBeTruthy();
  });
});
