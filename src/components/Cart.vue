<template lang="html">
  <div class="col-sm-12">
    <h3>Cart</h3>
    <CartItem v-for="product in products" v-bind:product="product" track-by="id" :key="product.id"/>
    <ul class="list-group">
      <!-- <li class="list-group-item">Subtotal (0 items): $0.00</li>
      <li class="list-group-item">Shipping:<span> $0.00</span></li>
      <li class="list-group-item">Taxes: $0.00</li> -->
      <li class="list-group-item"><strong>Total:</strong> <strong> {{ calTotal() | currency }}</strong></li>
      <li class="list-group-item">{{ totalProducts() }} items</li>
      <li class="list-group-item">
        <input type="text" v-model="customer_name" placeholder="Tên khách hàng" class="form-control" @input="errors.customer_name = ''"/>
        <p style="color: red">{{ errors.customer_name }}</p>
      </li>
      <li class="list-group-item">
        <input type="text" v-model="customer_address" placeholder="Địa chỉ khách hàng" class="form-control" @input="errors.customer_address = ''"/>
        <p style="color: red">{{ errors.customer_address }}</p>
      </li>
      
    </ul>
    <div class="mt-1 text-xs-cente">
      <button class="btn btn-success" @click="createOrder()">Checkout</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import CartItem from '@/components/CartItem'
import { EventBus } from '../event-bus.js'
import VueCurrencyFilter from 'vue-currency-filter'
import axios from 'axios'

Vue.use(VueCurrencyFilter,
{
  symbol : '$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

export default {
  name: "Cart",
  components: {CartItem},
  data() {
    return {
      products: [],
      customer_name: '',
      customer_address: '',
      errors : {
        customer_name: '',
        customer_address: ''
      }
    }
  },
  methods : {
    checkIncluded(productId) {
      if(this.products.length > 0) {
        for (var pro in this.products) {
          if (productId == this.products[pro].id) {
            return pro
          }
        }
      }
      return -1
    },
    calTotal(){
      var sum = 0.0
      for (var pro in this.products) {
        sum += this.products[pro].quantity * this.products[pro].price
      }
      return sum
    },
    removeItem (product) {
      for (var pro in this.products) {
        if (product.productId == this.products[pro].id) {
          this.products[pro].quantity = 1
          this.products.splice(pro, 1)
        }
      }
      EventBus.$emit('removeItemFromCart', product);
    },
    checkErrors() {
      let check = true
      if (!this.customer_name || this.customer_name.trim() === '') {
        this.errors.customer_name = 'This field is required'
        check = false
      }
      if (!this.customer_address || this.customer_address.trim() === '') {
        this.errors.customer_address = 'This field is required'
        check = false
      }
      return check
    },
    updateProducts () {

    },
    createOrder() {
      let check = this.checkErrors()
      const products = this.products
      if(check) {
        axios.post
        ( 'http://localhost:3000/orders/', 
          {
            products: products,
            customer: this.customer_name,
            address: this.customer_address,
            total: this.calTotal()
          }
        )
        .then(function(response){
            EventBus.$emit('checkOutCart', 1);
        });
      }
    },
    totalProducts () {
      return this.products.reduce((sum, product) => {
          return sum + product.quantity
      }, 0)
    }
  },
  created () {
    EventBus.$on('addItemToCart', product => {
      var index = this.checkIncluded(product.id)
      if(index === -1) {
          this.products.push(product);
      }
      else {
          this.products[index].quantity += 1
          this.products = this.products
      }
    }),
    this.$on('removeItem', product => {
      this.removeItem(product)
    });
  }
}
</script>

<style lang="css">
</style>
