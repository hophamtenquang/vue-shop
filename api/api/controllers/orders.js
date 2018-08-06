const mongoose = require("mongoose");

const Order = require("../models/order");
const Product = require("../models/product");
const OrderProduct = require("../models/order_product");
const OrderProductsController = require('../controllers/order_product');

exports.orders_get_all = (req, res, next) => {
  Order.find()
    .select("product quantity _id")
    .populate("product", "name")
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map(doc => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            request: {
              type: "GET",
              url: "http://localhost:3000/orders/" + doc._id
            }
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.orders_create_order = (req, res, next) => {
    const products = req.body.products; 
    const order = new Order({
      _id: mongoose.Types.ObjectId(),
      customer: req.body.customer,
      address: req.body.address,
      total: req.body.total,
    });
    console.log("order", order)
    order.save()
    .then(result => {
      OrderProductsController.create_order_products(result._id, products)
      res.status(201).json({
        message: "Order stored",
        createdOrder: {
          _id: result._id,
          customer: result.customer,
          address: result.address,
          total: result.total,
          products: products
        },
        request: {
          type: "GET",
          url: "http://localhost:3000/orders/" + result._id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


exports.orders_create_order_products = (req, res, next) => {
  let products = req.body.products;
  let order = req.body.order;

  products.forEach(function(product) {
    let order_products = new OrderProduct({
      order: order,
      product: product.id,
      price: product.price,
      quantity: product.quantity,
    });
    order.save()
  });
};


exports.orders_get_order = (req, res, next) => {
  Order.findById(req.params.orderId)
    .populate("product")
    .exec()
    .then(order => {
      if (!order) {
        return res.status(404).json({
          message: "Order not found"
        });
      }
      res.status(200).json({
        order: order,
        request: {
          type: "GET",
          url: "http://localhost:3000/orders"
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};

exports.orders_delete_order = (req, res, next) => {
  Order.remove({ _id: req.params.orderId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Order deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/orders",
          body: { productId: "ID", quantity: "Number" }
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
};
