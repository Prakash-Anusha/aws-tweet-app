import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Tweet } from 'src/app/models/Tweet';

import { DeleteTweetService } from 'src/app/services/delete-tweet.service';
import { EditTweetService } from 'src/app/services/edit-tweet.service';
import { PostCommentService } from 'src/app/services/post-comment.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {

  @Input() userId: string;
  @Input() tweet: string;
  @Input() tweetComments: Tweet[];
  @Input() tweetId: string;
  //Delete option enabled only for my-tweets functionality
  @Input() enableDelete: boolean;
  // Edit option enabled only for my-tweets functionality
  @Input() enableEdit: boolean;
  @Input() tweetDate: string;
  @Input() tweetTime: string;

  tweetComment: Tweet;
  editedTweet: Tweet;

  toggleCommentTextBox: Boolean = false;
  toggleEditTweetBox: Boolean = false;
  showElement: boolean = false;
  deleteTweetPopup: boolean = false;
  updateTweetPopup: boolean = false;

  constructor(
    private postTweetCommentService: PostCommentService,
    private deleteTweetService: DeleteTweetService,
    private editTweetService: EditTweetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  // Method to toggle comments section
  toggleCommentSection() {
    this.toggleCommentTextBox = true;
    this.tweetComment = new Tweet();
    this.tweetComment.tweetId = uuidv4();
    console.log(this.tweetId);
    this.tweetComment.firstName = localStorage.getItem('firstName');
    this.tweetComment.lastName = localStorage.getItem('lastName');
    this.tweetComment.userId = localStorage.getItem('loginId');
    console.log("text" , this.tweetComment.tweetText)
  }

  // Method to toggle edit post section
  toggleEditTweetSection() {
    this.toggleEditTweetBox = true;
    this.editedTweet = new Tweet();
    this.editedTweet.tweetId = uuidv4();
    console.log(this.tweetId);
    this.editedTweet.firstName = localStorage.getItem('firstName');
    this.editedTweet.lastName = localStorage.getItem('lastName');
    this.editedTweet.userId = localStorage.getItem('loginId');
    this.editedTweet.comments = this.tweetComments;
   
  }


// Method to post a comment to a tweet
  postTweetComment() {

    console.log("tweet comment", this.tweetComment);
    this.tweetComment.tweetDate = moment().format('dddd MMMM Mo YYYY')
    this.tweetComment.tweetTime = moment().format('h:mm a');
    this.postTweetCommentService.postComment(localStorage.getItem('loginId'),
      this.tweetId.toString(), this.tweetComment)
      .subscribe(
        response => {
          this.showElement = true;
          setTimeout(function () {
            this.showElement = false;
            this.router.navigate(['/home']);
          }.bind(this), 3000);
         
        },
        error => {
          alert('Unable to post tweet. Try again after sometime.')
        }
      );
  }

  //Method to delete a tweet
  deleteTweet(tweetId: string) {
    this.deleteTweetService.deleteTweet(localStorage.getItem("loginId"), this.tweetId)
      .subscribe(
        response => {
          console.log(response);
          this.deleteTweetPopup = true;
        setTimeout(function () {
          this.deleteTweetPopup = false;
          this.router.navigate(['/home']);
        }.bind(this), 3000);
          
        },
        error => {
          alert('unable to delete post. Try again after sometime.');
        }
      )
  }

  // Method to edit an already posted tweet
  editTweet(tweetId: string) {
    this.toggleEditTweetBox = true;
    this.editedTweet.tweetDate = moment().format('dddd MMMM Mo YYYY');
    this.editedTweet.tweetTime = moment().format('h:mm a');
    this.editTweetService.editTweet(localStorage.getItem("loginId"), tweetId, this.editedTweet)
      .subscribe(
        response => {
          this.updateTweetPopup = true;
          setTimeout(function () {
           
            this.updateTweetPopup = false;
            this.router.navigate(['/home']);
            
          }.bind(this), 3000);
          
        },
        error => {
         alert('Unable to edit post. Try again after some time.');
        }
      )
  }

}
