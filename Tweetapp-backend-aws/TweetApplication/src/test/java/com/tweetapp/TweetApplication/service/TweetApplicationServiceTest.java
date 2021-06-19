//package com.tweetapp.TweetApplication.service;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertThrows;
//import static org.mockito.Mockito.when;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Optional;
//
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.tweetapp.TweetApplication.dao.TweetRepository;
//import com.tweetapp.TweetApplication.dao.UserRepository;
//import com.tweetapp.TweetApplication.exception.PasswordMismatchException;
//import com.tweetapp.TweetApplication.exception.TweetDoesNotExistException;
//import com.tweetapp.TweetApplication.exception.UserExistsException;
//import com.tweetapp.TweetApplication.exception.UserNotRegisteredException;
//import com.tweetapp.TweetApplication.model.Tweet;
//import com.tweetapp.TweetApplication.model.User;
//
//@SpringBootTest
//public class TweetApplicationServiceTest {
//
//	@Mock
//	TweetRepository tweetsRepo;
//
//	@Mock
//	UserRepository usersRepo;
//	
//
//	@InjectMocks
//	TweetApplicationServiceImpl tweetServiceImpl;
//	
//	
//	@Test
//	public void testRegisterNewUser_UserExistsException() throws UserExistsException {
//		User newUserTest = new User();
//		
//		newUserTest.setLoginId("user_1");
//		newUserTest.setEmail("user1@abc.com");
//		
//		List<User> registeredUsersList = new ArrayList<>();
//		registeredUsersList.add(newUserTest);
//		 
//		when(usersRepo.findAll()).thenReturn(registeredUsersList);
//		
//		assertThrows(UserExistsException.class, () -> tweetServiceImpl.registerNewUser(newUserTest));
//	}
//	
//	@Test
//	public void testNewUserRegisterationSuccess() throws UserExistsException {
//		User newUserTest = new User();
//		
//		newUserTest.setLoginId("user_1");
//		newUserTest.setEmail("user1@abc.com");
//		
//		List<User> registeredUsersList = new ArrayList<>();
//		when(usersRepo.findAll()).thenReturn(registeredUsersList);
//		
//		assertEquals(newUserTest, tweetServiceImpl.registerNewUser(newUserTest));
//	}
//	
//	@Test
//	public void testValidateUser_PasswordMismatchException() {
//		User testUser = new User();
//		testUser.setLoginId("user1");
//		testUser.setPassword("123");
//		
//		User registeredUser = new User();
//		registeredUser.setLoginId("user1");
//		registeredUser.setPassword("1234");
//		
//		when(usersRepo.findById("user1")).thenReturn(Optional.of(registeredUser));
//		assertThrows(PasswordMismatchException.class, () -> tweetServiceImpl.validateUser(testUser));
//	}
//	
//	@Test
//	public void testValidateUser_UserNotRegisteredException() {
//		User testUser = new User();
//		testUser.setLoginId("user2");
//		testUser.setPassword("123");
//		
//		User registeredUser = new User();
//		registeredUser.setLoginId("user1");
//		registeredUser.setPassword("1234");
//		
//		when(usersRepo.findById("user1")).thenReturn(Optional.of(registeredUser));
//		assertThrows(UserNotRegisteredException.class, () -> tweetServiceImpl.validateUser(testUser));
//	}
//	
//	@Test
//	public void testValidateUSer_Success() throws PasswordMismatchException, UserNotRegisteredException {
//		User testUser = new User();
//		testUser.setLoginId("user1");
//		testUser.setPassword("123");
//		
//		User registeredUser = new User();
//		registeredUser.setLoginId("user1");
//		registeredUser.setPassword("123");
//		
//		when(usersRepo.findById("user1")).thenReturn(Optional.of(registeredUser));
//		assertEquals(registeredUser, tweetServiceImpl.validateUser(testUser));
//	}
//	
//	@Test
//	public void testUpdateTweet_TweetDoesNotExistException() {
//		Tweet testTweet = new Tweet();
//		
//		testTweet.setTweetId("123");
//		
//		when(tweetsRepo.findById("123")).thenReturn(Optional.ofNullable(null));
//		assertThrows(TweetDoesNotExistException.class, () -> tweetServiceImpl.updateTweet("user1", "123", testTweet));
//	}
//	
//	@Test
//	public void testUpdateTweetSuccess() throws TweetDoesNotExistException {
//		Tweet testTweet = new Tweet();
//		
//		testTweet.setTweetId("123");
//		testTweet.setTweetText("hello from the other side");
//		
//		Tweet oldTweet = new Tweet();
//		oldTweet.setTweetId("123");
//		oldTweet.setTweetText("hello");
//		
//		when(tweetsRepo.findById("123")).thenReturn(Optional.ofNullable(oldTweet));
//		assertEquals(testTweet, tweetServiceImpl.updateTweet("user1", "123", testTweet));
//	}
//	
//}
//
