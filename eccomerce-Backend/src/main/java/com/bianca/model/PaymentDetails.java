package com.bianca.model;

public class PaymentDetails {
	
	private String paymentMethod;
	private String status;
	private String paymentId;
	private String payPaymentLinkId;
	private String payPaymentReferenceId;
	private String payPaymentLinkStatus;
	private String payPaymentId;
	
	public PaymentDetails() {
		
	}

	public PaymentDetails(String paymentMethod, String status, String paymentId, String razorpayPaymentLinkId,
			String razorpayPaymentReferenceId, String razorpayPaymentLinkStatus, String razorpayPaymentId) {
		super();
		this.paymentMethod = paymentMethod;
		this.status = status;
		this.paymentId = paymentId;
		this.payPaymentLinkId = razorpayPaymentLinkId;
		this.payPaymentReferenceId = razorpayPaymentReferenceId;
		this.payPaymentLinkStatus = razorpayPaymentLinkStatus;
		this.payPaymentId = razorpayPaymentId;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getPayPaymentLinkId() {
		return payPaymentLinkId;
	}

	public void setPayPaymentLinkId(String payPaymentLinkId) {
		this.payPaymentLinkId = payPaymentLinkId;
	}

	public String getPayPaymentReferenceId() {
		return payPaymentReferenceId;
	}

	public void setPayPaymentReferenceId(String payPaymentReferenceId) {
		this.payPaymentReferenceId = payPaymentReferenceId;
	}

	public String getPayPaymentLinkStatus() {
		return payPaymentLinkStatus;
	}

	public void setPayPaymentLinkStatus(String payPaymentLinkStatus) {
		this.payPaymentLinkStatus = payPaymentLinkStatus;
	}

	public String getPayPaymentId() {
		return payPaymentId;
	}

	public void setPayPaymentId(String payPaymentId) {
		this.payPaymentId = payPaymentId;
	}

	
}
