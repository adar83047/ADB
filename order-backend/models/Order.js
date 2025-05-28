const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderID: String,
  user: {
    userID: String,
    name: String,
    email: String,
    phone: String,
    address: String
  },
  restaurant: {
    restaurantID: String,
    name: String,
    location: String,
    contact: String
  },
  items: [{
    itemID: String,
    name: String,
    price: Number,
    quantity: Number
  }],
  totalAmount: Number,
  payment: {
    paymentID: String,
    method: String,
    status: String
  },
  delivery: {
    deliveryID: String,
    deliveryPerson: String,
    status: String
  },
  status: String,
  appliedCoupon: {
    couponID: String,
    code: String,
    discount: Number
  }
});

module.exports = mongoose.model('Order', orderSchema);
