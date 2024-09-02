import { TestBed } from '@angular/core/testing';

import { LanguageCommunicationService } from './language-communication.service';

describe('LanguageCommunicationService', () => {
  let service: LanguageCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
