import { TestBed } from '@angular/core/testing';

import { MocktailslistserviceService } from './mocktailslistservice.service';

describe('MocktailslistserviceService', () => {
  let service: MocktailslistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MocktailslistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
