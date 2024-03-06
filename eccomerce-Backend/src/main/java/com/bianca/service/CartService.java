package com.bianca.service;

import com.bianca.exception.ProductException;
import com.bianca.model.Cart;
import com.bianca.model.User;
import com.bianca.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
