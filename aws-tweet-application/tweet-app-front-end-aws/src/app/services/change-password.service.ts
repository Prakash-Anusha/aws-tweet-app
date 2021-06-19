import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(
    private http: HttpClient
  ) { }

  changeUserPassword(newPassword: string) {
    const headers = new HttpHeaders()
      .set("newPassword", newPassword);

    console.log(newPassword);
    return this.http.put<any>(environment.baseUrl+ localStorage.getItem('loginId') + '/changePassword', null, {headers});
  }
}
