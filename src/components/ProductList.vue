<template lang="html">
  <div class="row">
    <div class="col-sm-3" v-for="product in products">
      <ProductItem :product="product" track-by="id"  />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProductItem from '@/components/ProductItem'
import * as api from '@/../api/server.js'
import { EventBus } from '../event-bus.js';

export default {
  name: "ProductList",
  components: { ProductItem },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      products : []
    }
  },
  created () {
    axios
      .get('http://localhost:3000/products/')
      .then(response => (this.products = response.data.products))

    EventBus.$on('removeItemFromCart', product => {
      for (var pro in this.products) {
        if (product.productId == this.products[pro].id) {
          console.log(this.products[pro].inventory)
          this.products[pro].inventory += product.productQuantity
        }
      }
    });
  },
  methods: {
    logProducts(){
      console.log(this.products);
    }
  }
}
</script>

<style lang="css">
</style>
