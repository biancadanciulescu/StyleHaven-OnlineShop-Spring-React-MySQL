package com.bianca.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bianca.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
