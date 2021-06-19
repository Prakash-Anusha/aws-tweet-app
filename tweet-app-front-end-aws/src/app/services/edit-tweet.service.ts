import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class EditTweetService {

  constructor(
    private http: HttpClient
  ) { }

  editTweet(userId: string, tweetId: string, editedTweet: Tweet) {
    const headers = new HttpHeaders()
      .set("tweetId", tweetId);

    return this.http.put<any>(environment.baseUrl + userId + '/update', editedTweet, {headers});
  }

}
