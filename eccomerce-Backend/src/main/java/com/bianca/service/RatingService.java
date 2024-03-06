package com.bianca.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.bianca.exception.ProductException;
import com.bianca.model.Rating;
import com.bianca.model.User;
import com.bianca.request.RatingRequest;

@Service
public interface RatingService {
	
	public Rating createRating(RatingRequest req, User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);
	
	

}
