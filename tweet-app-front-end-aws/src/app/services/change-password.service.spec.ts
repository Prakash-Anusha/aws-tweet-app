import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserDetails } from '../models/user-details';

import { ChangePasswordService } from './change-password.service';

describe('ChangePasswordService', () => {
  let changePasswordService: ChangePasswordService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ChangePasswordService]
    });
    changePasswordService = TestBed.inject(ChangePasswordService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should change password', () => {
    let newPassword = '1234';

    let user: UserDetails;

    let mockUser: UserDetails = {
      loginId: 'divyansh_kumar',
      firstName: 'Divyansh',
      lastName: 'Kumar',
      email: 'div@abc.com',
      dateOfBirth: '01-01-1989',
      contactNumber: '12314',
      password: '1234',

    }

    localStorage.setItem('loginId', 'divyansh_kumar');

    changePasswordService.changeUserPassword(newPassword).subscribe(result => {
      user = result;
    })

    const req = httpTestingController.expectOne({
      method: 'PUT',
      url: 'http://localhost:8090/api/v1.0/tweets/divyansh_kumar/changePassword'

    })

    req.flush(mockUser);
    expect(user.password).toEqual(newPassword);
    localStorage.clear;
  })
});
