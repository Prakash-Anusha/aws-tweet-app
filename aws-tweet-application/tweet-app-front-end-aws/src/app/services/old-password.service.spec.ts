import { TestBed } from '@angular/core/testing';

import { OldPasswordService } from './old-password.service';

describe('OldPasswordService', () => {
  let service: OldPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OldPasswordService]
    });
    service = TestBed.inject(OldPasswordService);
  });

});
