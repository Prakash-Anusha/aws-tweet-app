import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class DeleteTweetService {

  constructor(
    private http: HttpClient
  ) { }

  deleteTweet(userId: string, tweetId: string) {

    const headers = new HttpHeaders()
      .set("tweetId", tweetId);

    return this.http.delete<any>(environment.baseUrl + userId + '/delete',
      {headers});
  }
}
