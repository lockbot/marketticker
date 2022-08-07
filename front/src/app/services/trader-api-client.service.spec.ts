import { TestBed } from '@angular/core/testing';

import { TraderApiClientService } from './trader-api-client.service';

describe('TraderApiClientService', () => {
  let service: TraderApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraderApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
