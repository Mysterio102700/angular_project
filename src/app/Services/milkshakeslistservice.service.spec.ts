import { TestBed } from '@angular/core/testing';

import { MilkshakeslistserviceService } from './milkshakeslistservice.service';

describe('MilkshakeslistserviceService', () => {
  let service: MilkshakeslistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilkshakeslistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
