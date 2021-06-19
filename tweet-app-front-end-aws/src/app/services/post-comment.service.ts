import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  constructor(
    private http: HttpClient
  ) { }

  postComment(username: string, tweetId: string, tweetComment: Tweet) {

    const headers = new HttpHeaders()
      .set("tweetId", tweetId);

    console.log(tweetId);
    return this.http.post<any>(environment.baseUrl + username + '/reply', tweetComment, { headers });
  }

}
