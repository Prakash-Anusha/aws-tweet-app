import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoginServiceService]
    });
    service = TestBed.inject(LoginServiceService);
  });

});
