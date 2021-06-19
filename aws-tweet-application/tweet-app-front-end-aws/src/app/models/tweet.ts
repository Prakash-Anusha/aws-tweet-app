import { Time } from "@angular/common";
import { TweetComment } from "./tweet-comment";

export class Tweet {
    tweetId: string;
    userId: string;
    firstName: string;
    lastName: string;
    tweetText: string;
    comments: Tweet[];
    tweetDate: string;
    tweetTime: string;

    constructor(){}
    
}