const profile = {
  'firstName': 'Joe',
  'lastName': 'Montana',
  'limit': 850.00
}

const products = [
  { 'id': 1, 'name': 'iPad 4 Mini', 'price': 500.01, 'inventory': 2, 'shipping': 15.00, 'quantity': 1 },
  { 'id': 2, 'name': 'H&M T-Shirt White', 'price': 10.99, 'inventory': 10, 'shipping': 5.00, 'quantity': 1 },
  { 'id': 3, 'name': 'Nirvana - LP', 'price': 19.99, 'inventory': 3, 'shipping': 22.50, 'quantity': 1 },
  { 'id': 4, 'name': 'Licensed Steel Gloves', 'price': 30.99, 'inventory': 5, 'shipping': 9.00, 'quantity': 1 },
  { 'id': 5, 'name': 'Rustic Granite Car', 'price': 487.00, 'inventory': 1, 'shipping': 35.00, 'quantity': 1 },
  { 'id': 6, 'name': 'Fantastic Cotton Pants', 'price': 59.59, 'inventory': 6, 'shipping': 11.00, 'quantity': 1 },
  { 'id': 7, 'name': 'Tasty Wooden Pizza', 'price': 29.00, 'inventory': 2, 'shipping': 18.00, 'quantity': 1 },
  { 'id': 8, 'name': 'Delicious Concrete Fish', 'price': 12.99, 'inventory': 4, 'shipping': 6.00, 'quantity': 1 },
  { 'id': 9, 'name': 'Granite Computer', 'price': 109.10, 'inventory': 10, 'shipping': 22.70, 'quantity': 1 },
  { 'id': 10, 'name': 'Handcrafted Soft Salad', 'price': 13.99, 'inventory': 3, 'shipping': 3.50, 'quantity': 1 },
  { 'id': 11, 'name': 'Incredible Steel Bacon', 'price': 30.99, 'inventory': 5, 'shipping': 7.90, 'quantity': 1 },
  { 'id': 12, 'name': 'Tasty Plastic Bike', 'price': 75.00, 'inventory': 5, 'shipping': 25.00, 'quantity': 1 }
]

const promotions = [
  { 'id': 1, 'name': '30% OFF' },
  { 'id': 2, 'name': '$100.00 Discount' },
  { 'id': 3, 'name': 'Free Shipping' },
  { 'id': 4, 'name': '+ $100.00 on limit' }
]

// Simulate requests

export default {
  getProfile (cb) {
    setTimeout(() => cb(profile), 200)
  },

  getProducts (cb) {
    setTimeout(() => cb(products), 200)
  },

  getPromotions (cb) {
    setTimeout(() => cb(promotions), 200)
  },
  products: products
}
