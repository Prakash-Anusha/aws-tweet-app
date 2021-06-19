import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(
    private http: HttpClient
  ) {}

  registerNewUser(newUser: UserDetails) {
    return this.http.post<any>(environment.baseUrl+'register', newUser);
  }
}
