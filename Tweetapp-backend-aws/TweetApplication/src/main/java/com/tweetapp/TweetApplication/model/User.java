package com.tweetapp.TweetApplication.model;

import org.springframework.data.annotation.Id;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;



@DynamoDBTable(tableName = "users")
public class User {
	
	@Id
	@DynamoDBHashKey(attributeName = "loginId")
	private String loginId;
	@DynamoDBAttribute(attributeName = "firstName")
	private String firstName;
	@DynamoDBAttribute(attributeName = "lastName")
	private String lastName;
	@DynamoDBAttribute(attributeName = "dateOfBirth")
	private String dateOfBirth;
	@DynamoDBAttribute(attributeName = "email")
	private String email;
	@DynamoDBAttribute(attributeName = "password")
	private String password;
	@DynamoDBAttribute(attributeName = "contactNumber")
	private String contactNumber;
	
	public User() {
		
	}
	
	

	public User(String loginId, String firstName, String lastName, String dateOfBirth, String email, String password,
			String contactNumber) {
		super();
		this.loginId = loginId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.email = email;
		this.password = password;
		this.contactNumber = contactNumber;
	}



	public String getLoginId() {
		return loginId;
	}

	public void setLoginId(String loginId) {
		this.loginId = loginId;
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

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}



	@Override
	public String toString() {
		return "User [loginId=" + loginId + ", firstName=" + firstName + ", lastName=" + lastName + ", dateOfBirth="
				+ dateOfBirth + ", email=" + email + ", password=" + password + ", contactNumber=" + contactNumber
				+ "]";
	}
	
	
	
}
