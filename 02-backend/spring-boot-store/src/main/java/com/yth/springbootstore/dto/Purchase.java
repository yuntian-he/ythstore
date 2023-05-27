package com.yth.springbootstore.dto;

import com.yth.springbootstore.entity.Address;
import com.yth.springbootstore.entity.Customer;
import com.yth.springbootstore.entity.Order;
import com.yth.springbootstore.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;

}