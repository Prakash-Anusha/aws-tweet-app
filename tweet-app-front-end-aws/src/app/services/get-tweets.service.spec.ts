import { TestBed } from '@angular/core/testing';
import { GetTweetsService } from './get-tweets.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Tweet } from '../models/Tweet';

describe('GetTweetsService', () => {
  
  let getTweetsService: GetTweetsService,
      httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetTweetsService]
    });

    getTweetsService = TestBed.inject(GetTweetsService);
    httpTestingController = TestBed.inject(HttpTestingController);

  })

  it('should retrieve a list of tweets', () => {
    
    let mockTweetsList: Tweet[];

    let mockTweet: Tweet = 
      {
        tweetId: '123',
      userId: 'a_b',
      firstName: 'a',
      lastName: 'b',
      tweetText: 'jjoi',
      comments: [],
      tweetDate: '01-01-2020',
      tweetTime: '07:30 pm',

      }
    

    getTweetsService.getTweets().subscribe(tweets => {
      mockTweetsList = tweets;
    })

    const req = httpTestingController.expectOne({
      method: "GET",
      url: 'http://localhost:8090/api/v1.0/tweets/all'
    });

    req.flush([mockTweet]);

    expect(mockTweetsList[0]).toEqual(mockTweet);
  });

});
