<template>
  <div class="  ">
    <PageHeader />
    <div class="content col-sm-12" style="padding: 30px 0px">
      <div class="row">
        <div class="col-sm-8 row">
          <ProductList />
        </div>
        <div class="col-sm-4">
          <Cart />
        </div>
      </div>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'

import PageFooter from '@/components/PageFooter'
import ProductList from '@/components/ProductList'
import ProductItem from '@/components/ProductItem'
import Cart from '@/components/Cart'

export default {
  name: 'Home',
  components: { PageHeader, PageFooter, ProductItem, ProductList, Cart },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
/* <style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> */
