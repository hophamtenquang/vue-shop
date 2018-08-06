const mongoose = require("mongoose");

const OrderProduct = require("../models/order_product");

exports.create_order_products = (orderId, products) => {
    products.forEach(function(product) {
      let order_products = new OrderProduct({
        order: orderId,
        product: product.id,
        price: product.price,
        quantity: product.quantity,
      });
      order_products.save()
    });
  };