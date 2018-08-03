<template lang="html">
  <!-- A grey horizontal navbar that becomes vertical on small screens -->
  <nav class="navbar navbar-expand-sm bg-dark">

    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link :to="{ name: 'Home'}" class="nav-link">Home</router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
export default {
  name: "PageHeader"
}
</script>

<style lang="css">
</style>
