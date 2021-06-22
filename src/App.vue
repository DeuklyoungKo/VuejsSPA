<template>
  <div id="app">
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/product" exact>Product Infomation</router-link>
      <router-link to="/product" tag="button" exact>Product Infomation</router-link>
      <router-link :to="`/product/${ id }`">Product 1</router-link>
      <router-link :to="{ path: '/product', query: { id: 1 } }" exact>Product query id 1</router-link>
      <router-link :to="{ name: 'product-home', params: { id: 1 } }" exact>Product params id 1</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      id: 2
    }
  },
  created () {
    // this.$router.push(`/product`)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active {
  background: #e25193;
}
</style>
