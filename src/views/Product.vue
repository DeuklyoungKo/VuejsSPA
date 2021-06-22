<template>
    <div class="product">
      <h1>{{ detail.name }}</h1>
      <nav clas="nav">
        <router-link :to="{ name: 'product-home' }">Product Detail</router-link>
        <router-link :to="{ name: 'product-review' }">Review</router-link>
      </nav>
      <router-view />
      <!-- <dl class="product-table">
        <dt>Product Name</dt><dd>{{ item.name }}</dd>
        <dt>Price</dt><dd>{{ item.price }}Won</dd>
        <dt>Product Infomation</dt><dd>{{ item.content }}</dd>
      </dl> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: { id: Number },
  computed: mapGetters('product', ['detail']),
  watch: {
    id: {
      handler () {
        this.$store.dispatch('product/load', this.id)
      },
      immediate: true
    }
  },
  beforeDestory () {
    this.$store.dispatch('product/destory')
  },
  created () {
    console.log('created =========')
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$store.getters['product/detail'].name)
  }

}
</script>
