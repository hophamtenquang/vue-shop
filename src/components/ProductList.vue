<template lang="html">
  <div>
    <div class="row" v-for="row in chunkedItems">
      <div class="col-sm-3" v-for="product in row">
        <ProductItem :product="product" track-by="id"  />
      </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import ProductItem from '@/components/ProductItem'
import * as api from '@/../api/server.js'
import { EventBus } from '../event-bus.js'
import chunk from 'chunk'

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

    EventBus.$on('checkOutCart', _ => {
      this.updateProducts();
    })
  },
  methods: {
    logProducts(){
      console.log(this.products);

    },
    success() {
      alert('You bought!!!!!!!')
      setTimeout(function(){ location.reload(); }, 100);
    },
    updateProducts() {
      axios.put('http://localhost:3000/products/bulkUpdate', {products: this.products})
      .then(response => ( this.success() ))
    }
  },
  computed: {
   chunkedItems () {
     return chunk(this.products,4)
   }
}
}
</script>

<style lang="css">
</style>
