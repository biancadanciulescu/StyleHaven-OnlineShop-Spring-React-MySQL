package com.bianca.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.bianca.exception.OrderException;
import com.bianca.model.Address;
import com.bianca.model.Cart;
import com.bianca.model.CartItem;
import com.bianca.model.Order;
import com.bianca.model.OrderItem;
import com.bianca.model.User;
import com.bianca.repository.AdressRepository;
import com.bianca.repository.CartRepository;
import com.bianca.repository.OrderItemRepository;
import com.bianca.repository.OrderRepository;
import com.bianca.repository.UserRepository;

@Service
public class OrderServiceImplementation implements OrderService{

	
	private OrderRepository orderRepository;
	private AdressRepository addressRepository;
	private UserRepository userRepository;
	private OrderItemService orderItemService;
	private OrderItemRepository orderItemRepository;
	
	private CartRepository cartRepository;
	private CartService cartService;
	private ProductService productService;
	
	public OrderServiceImplementation(OrderRepository orderRepository, AdressRepository addressRepository,
			UserRepository userRepository, OrderItemService orderItemService, OrderItemRepository orderItemRepository,
			CartRepository cartRepository, CartService cartService, ProductService productService) {
		super();
		this.orderRepository = orderRepository;
		this.addressRepository = addressRepository;
		this.userRepository = userRepository;
		this.orderItemService = orderItemService;
		this.orderItemRepository = orderItemRepository;
		this.cartRepository = cartRepository;
		this.cartService = cartService;
		this.productService = productService;
	}

	@Override
	public Order createOrder(User user, Address shippingAddress) {
		
		shippingAddress.setUser(user);
		Address address = addressRepository.save(shippingAddress);
		user.getAddress().add(address);
		userRepository.save(user);
		
		
		Cart cart = cartService.findUserCart(user.getId());
		List<OrderItem> orderItems = new ArrayList<>();
		
		
		for(CartItem item: cart.getCartItems()) {
			OrderItem orderItem = new OrderItem();
			
			orderItem.setPrice(item.getPrice());
			orderItem.setProduct(item.getProduct());
			orderItem.setQuantity(item.getQuantity());
			orderItem.setSize(item.getSize());
			orderItem.setUserId(item.getUserId());
			orderItem.setDiscountedPrice(item.getDiscountedPrice());
			
			System.out.println("kkkkkkkk");
			OrderItem createdOrderItem = orderItemRepository.save(orderItem);
			System.out.println("lllllll");
			orderItems.add(createdOrderItem);
		}
		
		Order createdOrder = new Order();
		createdOrder.setUser(user);
		createdOrder.setOrderItems(orderItems);
		createdOrder.setTotalPrice(cart.getTotalPrice());
		createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
		createdOrder.setDiscount(cart.getDiscount());
		createdOrder.setTotalItem(cart.getTotalItem());
		createdOrder.setShippingAddress(address);
		createdOrder.setOrderDate(LocalDateTime.now());
		createdOrder.setOrderStatus("PENDING");
		createdOrder.getPaymentDetails().setStatus("PENDING");
		createdOrder.setCreatedAt(LocalDateTime.now());
		
		
		Order savedOrder = orderRepository.save(createdOrder);
		
		for(OrderItem item:orderItems) {
			item.setOrder(savedOrder);
			orderItemRepository.save(item);
		}
		
		return savedOrder;
	}

	@Override
	public Order findOrderById(Long orderId) throws OrderException {
		
		Optional<Order> opt = orderRepository.findById(orderId);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		
		throw new OrderException("order not exist with id" + "orderId");
		
	}

	@Override
	public List<Order> usersOrderHistory(Long userId) {
		
		List<Order> orders = orderRepository.getUsersOrders(userId);
		return orders;
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("PLACED");
		order.getPaymentDetails().setStatus("COMPLETED");
		
		return order;
	}

	@Override
	public Order confirmedOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("CONFIRMED");
		return orderRepository.save(order);
	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("SHIPPED");
		return orderRepository.save(order);
		
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Order cancelledOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("CANCELLED");
		return orderRepository.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		return orderRepository.findAll();
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		
		Order order = findOrderById(orderId);
		
		orderRepository.deleteById(orderId);
		
	}

}
