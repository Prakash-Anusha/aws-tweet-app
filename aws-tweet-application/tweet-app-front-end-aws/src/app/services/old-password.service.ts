import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class OldPasswordService {


  constructor(
    private http: HttpClient
  ) { }

  // Call service to validate old password
  oldPasswordValidationService( oldPassword: string) {
    const loginId = localStorage.getItem('loginId');
    const user = new UserDetails();
    user.loginId = localStorage.getItem('loginId');
    user.password = oldPassword;

    return this.http.post<any>(environment.baseUrl+'login', user);
    
  }

}
