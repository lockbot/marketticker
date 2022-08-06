import { TestBed } from '@angular/core/testing';

import { TestTranslatorService } from './test-translator.service';

describe('TestTranslatorService', () => {
  let service: TestTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
