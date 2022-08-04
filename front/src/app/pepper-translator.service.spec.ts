import { TestBed } from '@angular/core/testing';

import { PepperTranslatorService } from './pepper-translator.service';

describe('PepperTranslatorService', () => {
  let service: PepperTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PepperTranslatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
