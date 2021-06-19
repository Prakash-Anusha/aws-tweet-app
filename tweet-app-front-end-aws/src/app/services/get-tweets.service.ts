import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockTweetsList } from '../mock-data/mock-all-tweets';
import { Tweet } from '../models/Tweet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetTweetsService {
  
  constructor(
    private http: HttpClient
  ) { }

  getTweets() {
    return this.http.get<any>(environment.baseUrl+'all');
  }
}
