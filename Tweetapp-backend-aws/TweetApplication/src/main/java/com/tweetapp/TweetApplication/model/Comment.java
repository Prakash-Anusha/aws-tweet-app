package com.tweetapp.TweetApplication.model;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBDocument;

@DynamoDBDocument
public class Comment {

	private String userId;
	private String tweetComment;
	private String firstName;
	private String lastName;
	private String tweetDate;
	private String tweetTime;

	public Comment() {
		super();
	}

	
	public Comment(String userId, String tweetComment, String firstName, String lastName, String tweetDate,
			String tweetTime) {
		super();
		this.userId = userId;
		this.tweetComment = tweetComment;
		this.firstName = firstName;
		this.lastName = lastName;
		this.tweetDate = tweetDate;
		this.tweetTime = tweetTime;
	}


	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getTweetComment() {
		return tweetComment;
	}

	public void setTweetComment(String tweetComment) {
		this.tweetComment = tweetComment;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getTweetDate() {
		return tweetDate;
	}

	public void setTweetDate(String tweetDate) {
		this.tweetDate = tweetDate;
	}

	public String getTweetTime() {
		return tweetTime;
	}

	public void setTweetTime(String tweetTime) {
		this.tweetTime = tweetTime;
	}


	@Override
	public String toString() {
		return "Comment [userId=" + userId + ", tweetComment=" + tweetComment + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", tweetDate=" + tweetDate + ", tweetTime=" + tweetTime + "]";
	}

	

}
