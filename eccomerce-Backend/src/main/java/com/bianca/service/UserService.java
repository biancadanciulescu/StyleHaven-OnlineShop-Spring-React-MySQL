package com.bianca.service;

import com.bianca.exception.UserException;
import com.bianca.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	

}
