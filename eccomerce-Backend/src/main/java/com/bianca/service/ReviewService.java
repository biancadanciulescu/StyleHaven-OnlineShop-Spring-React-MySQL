package com.bianca.service;

import java.util.List;

import com.bianca.exception.ProductException;
import com.bianca.model.Review;
import com.bianca.model.User;
import com.bianca.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req, User user) throws ProductException;
    public List<Review> getAllReview(Long productId);

}
