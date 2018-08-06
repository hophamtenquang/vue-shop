<template lang="html">
  <div style="margin-bottom: 10px">
    <img class="col-sm-12" :src="product.productImage" alt="">
    <h4>{{ product.name }}</h4>
    <p>{{ product.description }}</p>
    <p class="" style="color: blue">${{ product.price }}</p>
    <p class="" style="color: green">Stock: {{ product.inventory }}</p>
    <button type="button" name="button" @click="emitAddItemToCartEvent()" class="btn btn-primary " :disabled="!product.inventory">Add to Cart</button>
  </div >
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
  name: "ProductItem",
  props: {
    product: Object
  },
  created () {
  },
  methods : {
    emitAddItemToCartEvent() {
      EventBus.$emit('addItemToCart', this.product);
      this.product.inventory -= 1
    }
  }
}
</script>

<style lang="css">
</style>
