const mongoose = require('mongoose');

const orderProductSchema = mongoose.Schema({
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    price: { type: Number },
    quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('OrderProduct', orderProductSchema);