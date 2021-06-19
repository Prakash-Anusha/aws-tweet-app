import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/models/Tweet';
import { GetTweetsService } from 'src/app/services/get-tweets.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //Tweets list
  tweetsList: Tweet[] = [];

  firstName = localStorage.getItem('firstName');
  lastName = localStorage.getItem('lastName');
  loginId = localStorage.getItem("loginId");
 
  constructor(
    private getTweetsService: GetTweetsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTweets();
  }

  //Method to invoke get tweets service to retrieve all tweets
  getTweets() {
    this.getTweetsService.getTweets().subscribe(
      response => {
        this.tweetsList = response;
        this.router.navigate(['/home']);
      },
      error => {
        alert('Unable to retrieve tweets. Please try again later.')
      })
  }



}
