package com.bianca.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bianca.response.ApiResponse;

@RestController
@RequestMapping("/")
public class HomeConroller {
	
	@GetMapping
	public ResponseEntity<ApiResponse> homeMessage() {
		
		ApiResponse res = new ApiResponse();
		
		res.setMessage("welcome to ecommerce backend system");
		res.setStatus(true);
		
		return new ResponseEntity<>(res, HttpStatus.OK);
		
	}

}
