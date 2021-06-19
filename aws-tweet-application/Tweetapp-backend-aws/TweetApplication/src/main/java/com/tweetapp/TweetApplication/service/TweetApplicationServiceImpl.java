package com.tweetapp.TweetApplication.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.tweetapp.TweetApplication.dao.TweetRepository;
import com.tweetapp.TweetApplication.dao.UserRepository;
import com.tweetapp.TweetApplication.exception.InvalidUsernameException;
import com.tweetapp.TweetApplication.exception.PasswordMismatchException;
import com.tweetapp.TweetApplication.exception.TweetDoesNotExistException;
import com.tweetapp.TweetApplication.exception.UserExistsException;
import com.tweetapp.TweetApplication.exception.UserNotRegisteredException;
import com.tweetapp.TweetApplication.model.Comment;
import com.tweetapp.TweetApplication.model.Tweet;
import com.tweetapp.TweetApplication.model.User;


@Service
public class TweetApplicationServiceImpl {

	@Autowired
	TweetRepository tweetsRepo;

	@Autowired
	UserRepository usersRepo;
	

	public List<Tweet> getAllTweets() {
		return tweetsRepo.findAll();
	}

	// Method to register new User
	public User registerNewUser(User newUser) throws UserExistsException {
		
		//Get list of registered users
		List<User> registeredUsers = usersRepo.findAll();

		// Check if the given userId and email already exists
		if (registeredUsers != null && !registeredUsers.isEmpty()) {
			Optional<User> registeredUserOptional = registeredUsers.stream()
					.filter(user -> user.getLoginId().equalsIgnoreCase(newUser.getLoginId())
							|| user.getEmail().equalsIgnoreCase(newUser.getEmail()))
					.findAny();

			if (!registeredUserOptional.isPresent()) {
				//If email and userId are unique, register new user
				usersRepo.save(newUser);
				return newUser;
			} else {
				throw new UserExistsException("User with given userId or email already exists.");
			}
		} else {
			usersRepo.save(newUser);
			return newUser;
		}

	}

	//Method to validate user login details
	public User validateUser(User userLoginDetails) throws PasswordMismatchException, UserNotRegisteredException {

		String loginId = userLoginDetails.getLoginId();
		String password = userLoginDetails.getPassword();
		
		User user = usersRepo.findByUsername(loginId);
		
		// If user object found, it is a registered user. Else, user is not registered.
		if ( user != null) {
			if (user.getPassword().contentEquals(password)) {
				// return user details if password matches else throw exception
				return user;
			} else {
				throw new PasswordMismatchException("Mismatch in password provided");
			}
		} else {
			// Throw exception if user is not registered
			throw new UserNotRegisteredException("User with given loginId cannot be found");
		}
	}

	// Method to return a list of all users
	public List<User> getAllUsers() {
		return usersRepo.findAll();
	}

	//Method to return all of a user's tweets
	public List<Tweet> getUserTweets(String username) throws InvalidUsernameException {
		// use username as login id
		if( !username.isEmpty()) {
			return tweetsRepo.findAll().stream().filter(tweet -> tweet.getUserId().contentEquals(username))
					.collect(Collectors.toList());

		} else {
			throw new InvalidUsernameException("Username/loginId provided is invalid");
		}
		
	}

	//Method to post a new tweet
	public void postNewTweet(String username, Tweet newTweet) {
		
		newTweet.setTweetId(UUID.randomUUID().toString());
		tweetsRepo.insert(newTweet);
		
	}

	//Method to update an existing tweet
	public Tweet updateTweet(String userId, String tweetId, Tweet updatedTweet) throws TweetDoesNotExistException {
		
		updatedTweet.setTweetId(tweetId);
		Optional<Tweet> originalTweetOptional = tweetsRepo.findById(tweetId);
		if(originalTweetOptional.isPresent()) {
			tweetsRepo.save(updatedTweet);
			return updatedTweet;
		} else {
			throw new TweetDoesNotExistException("This tweet does not exist anymore."); 
		}
		
		
	}

	//Method to delete a tweet
	public boolean deleteTweet(String tweetId) throws TweetDoesNotExistException {
		if(tweetsRepo.existsById(tweetId) && !tweetId.isEmpty()) {
			tweetsRepo.deleteById(tweetId);
			return true;
		} else {

			throw new TweetDoesNotExistException("This tweet does not exist anymore.");
		}
	}
	
	// Method to comment on a tweet
		public Tweet replyTweet(String userId, String tweetId, Tweet tweetReply) throws TweetDoesNotExistException {
			Tweet getTweet = tweetsRepo.FindTweetById(tweetId);
			if (getTweet != null) {
				;
				Comment comment = new Comment(userId,tweetReply.getTweetText() , tweetReply.getFirstName(), tweetReply.getLastName(), tweetReply.getTweetDate(), tweetReply.getTweetTime());
				List<Comment> addList = new ArrayList<Comment>();
				addList.add(comment);
				getTweet.getComments().add(comment);
				return tweetsRepo.save(getTweet);
			} else {
				throw new TweetDoesNotExistException("This tweet does not exist anymore.");
			}
		}
	
	//Method to change a user's password
	public User changePassword(String loginId, String newPassword) throws Exception {
		User userDetailsOptional = usersRepo.findByUsername(loginId);
		
		if(userDetailsOptional!=null) {
			User user = userDetailsOptional; 
			user.setPassword(newPassword);
			return usersRepo.save(user);
			
		} else {
			throw new Exception("Unable to change password");
		}
	}
	

}
