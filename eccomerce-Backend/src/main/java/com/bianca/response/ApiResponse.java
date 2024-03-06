package com.bianca.response;

public class ApiResponse {
	
	private String message;
	private Boolean status;
	
	public ApiResponse() {
		
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public ApiResponse(String message, Boolean status) {
		super();
		this.message = message;
		this.status = status;
	}
	
	

}
