package com.tweetapp.TweetApplication.dao;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.tweetapp.TweetApplication.model.User;


@Repository
public class UserRepository {

	@Autowired
	private DynamoDBMapper mapper;

	public User findByUsername(String loginId) {
		return mapper.load(User.class, loginId);
	}

	public User save(User user) {
		mapper.save(user);
		return user;
	}

	public List<User> findAll() {
		return mapper.scan(User.class, new DynamoDBScanExpression());
	}

	public List<User> searchByUsername(String loginId) {
		List<User> results = mapper.scan(User.class, new DynamoDBScanExpression());
		List<User> returnedList = new ArrayList<User>();
		for (int i = 0; i < results.size(); i++) {
			if (results.get(i).getLoginId().contains(loginId)) {
				returnedList.add(results.get(i));
			}
		}
		return returnedList;
	}

}


