import { TestBed } from '@angular/core/testing';

import { JuiceslistserviceService } from './juiceslistservice.service';

describe('JuiceslistserviceService', () => {
  let service: JuiceslistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuiceslistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
