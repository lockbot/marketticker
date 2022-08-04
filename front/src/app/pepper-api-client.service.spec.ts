import { TestBed } from '@angular/core/testing';

import { PepperApiClientService } from './pepper-api-client.service';

describe('PepperApiClientService', () => {
  let service: PepperApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepperApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
