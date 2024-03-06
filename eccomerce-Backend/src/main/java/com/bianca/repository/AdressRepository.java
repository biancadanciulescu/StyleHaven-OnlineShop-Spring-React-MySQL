package com.bianca.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bianca.model.Address;

public interface AdressRepository extends JpaRepository<Address, Long>{

}
