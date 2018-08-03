<template lang="html">
  <div class="row col-sm-12">
    <div class="col-sm-2">
      <img src="/static/product.jpg" style="width: 30px" alt="">
    </div>
    <div class="col-sm-8">
      <h6><strong>{{ product.name }}</strong></h6>
      <p style="text-align: right">
        <span>{{ product.quantity }}</span> x <span style="color: blue"> {{ product.price }} </span> = <span style="color: blue">{{ getTotal() | currency }}</span>
      </p>
    </div>
    <div class="col-sm-1">
      <strong @click="removeItem(product.id, product.quantity)">x</strong>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    product: Object
  },
  methods: {
    getTotal() {
      return this.product.price * this.product.quantity;
    },
    removeItem(productId, productQuantity) {
      this.$parent.$emit('removeItem', {productId, productQuantity});
    }
  }
}
</script>

<style lang="css">
</style>
