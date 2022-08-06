import { TestBed } from '@angular/core/testing';

import { FixerTranslatorService } from './fixer-translator.service';

describe('fixerTranslatorService', () => {
  let service: FixerTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FixerTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
