import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // REST call url
  constructor(
    private http: HttpClient
  ) { }

  // Method to call REST service for validating login credentials
  validateLoginCredentials(user: UserDetails) {
    return this.http.post<any>(environment.baseUrl+'login', user);
  }


}

