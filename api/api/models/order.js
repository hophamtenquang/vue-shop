const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    customer: { type: String, required: false },
    address: { type: String, required: false },
    total: { type: Number }
});

module.exports = mongoose.model('Order', orderSchema);