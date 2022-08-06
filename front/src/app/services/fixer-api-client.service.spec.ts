import { TestBed } from '@angular/core/testing';

import { FixerApiClientService } from './fixer-api-client.service'

describe('fixerApiClientService', () => {
  let service: FixerApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixerApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
