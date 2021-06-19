import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetMyTweetsService {

  constructor(
    private http: HttpClient
  ) { }

  getMyTweets(userId: String) {
    return this.http.get<any>(environment.baseUrl + userId);
  }


}
