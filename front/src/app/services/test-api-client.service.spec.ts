import { TestBed } from '@angular/core/testing';

import { TestApiClientService } from './test-api-client.service'

describe('TestApiClientService', () => {
  let service: TestApiClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestApiClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
