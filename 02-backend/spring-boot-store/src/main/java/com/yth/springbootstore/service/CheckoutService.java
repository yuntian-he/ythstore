package com.yth.springbootstore.service;

import com.yth.springbootstore.dto.Purchase;
import com.yth.springbootstore.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
