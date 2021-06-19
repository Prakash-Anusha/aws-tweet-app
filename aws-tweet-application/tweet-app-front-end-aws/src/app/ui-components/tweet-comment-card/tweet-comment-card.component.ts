import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet-comment-card',
  templateUrl: './tweet-comment-card.component.html',
  styleUrls: ['./tweet-comment-card.component.scss']
})
export class TweetCommentCardComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() tweetComment: string;
  @Input() tweetDate: string;
  @Input() tweetTime: string;

  constructor() { }

  ngOnInit(): void {
   
  }


}
