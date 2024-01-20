import { TestBed } from '@angular/core/testing';

import { SimulateServiceService } from './simulate-service.service';

describe('SimulateServiceService', () => {
  let service: SimulateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimulateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
