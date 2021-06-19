import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class PostTweetsService {



  constructor(
    private http: HttpClient
  ) { 
  }

  postTweet(newTweet: Tweet) {
    return this.http.post<Tweet>(environment.baseUrl+'christoph_walowitz/add', newTweet);
  }

}
