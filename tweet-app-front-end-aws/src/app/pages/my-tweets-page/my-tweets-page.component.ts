import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/Tweet';
import { GetMyTweetsService } from 'src/app/services/get-my-tweets.service';

@Component({
  selector: 'app-my-tweets-page',
  templateUrl: './my-tweets-page.component.html',
  styleUrls: ['./my-tweets-page.component.scss']
})
export class MyTweetsPageComponent implements OnInit {

  myTweetsList: Tweet[] = [];
  noTweetsToDisplay : boolean = false;

  constructor(
    private getMyTweetsService: GetMyTweetsService
  ) { }

  ngOnInit(): void {
    this.getMyTweets();
  }

  // Method to get all logged-in user tweets
  getMyTweets() {
    this.getMyTweetsService.getMyTweets(localStorage.getItem('loginId'))
      .subscribe(
        response => {
          console.log("res ", this.myTweetsList);
          this.myTweetsList = response;
          if(this.myTweetsList.length==0){
            this.noTweetsToDisplay = true;
          }else{
            this.noTweetsToDisplay = false;
          }
        },
        error => {
          alert('Unable to retrieve your posts. Apologize for the inconvenience caused, Please try again later')
        }
      );
  }


}
