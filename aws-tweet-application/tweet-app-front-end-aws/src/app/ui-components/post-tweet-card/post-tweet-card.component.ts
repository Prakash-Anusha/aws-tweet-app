import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweet } from 'src/app/models/Tweet';
import { PostTweetsService } from 'src/app/services/post-tweets.service';
import {v4 as uuidv4} from 'uuid';
import { DatePipe } from '@angular/common'
import * as moment from 'moment';

@Component({
  selector: 'app-post-tweet-card',
  templateUrl: './post-tweet-card.component.html',
  styleUrls: ['./post-tweet-card.component.scss']
})
export class PostTweetCardComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() userId: string;
  showElement : boolean = false;
  tweet = new Tweet();
  
  permittedCharacterCount = 144;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postTweetService: PostTweetsService,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
  }

  postTweet() {
    this.tweet.userId = this.userId;
    this.tweet.firstName = this.firstName;
    this.tweet.lastName = this.lastName;
    this.tweet.tweetDate = moment().format('dddd MMMM Mo YYYY')
    this.tweet.tweetTime = moment().format('h:mm a');
    this.tweet.tweetId = uuidv4();
    this.postTweetService.postTweet(this.tweet).subscribe(result => this.gotoHomePage());
    this.tweet.tweetText = '';
    this.showElement= true;
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
