import { TestBed } from '@angular/core/testing';

import { RegisterUserService } from './register-user.service';

describe('RegisterUserService', () => {
  let service: RegisterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterUserService]
    });
    service = TestBed.inject(RegisterUserService);
  });

});
