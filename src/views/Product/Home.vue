<template>
    <div class="product">
      <h1>{{ detail.name }}</h1>
      <dl class="product-table">
        <dt>Product Name</dt><dd>{{ detail.name }}</dd>
        <dt>Price</dt><dd>{{ detail.price }}Won</dd>
        <dt>Product Infomation</dt><dd>{{ detail.content }}</dd>
      </dl>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  // data: function () {
  //   return {
  //     item: this.$store.getters['product/detail'],
  //     id: this.$store.getters['product/detail'].id
  //   }
  // },
  computed: mapGetters('product', ['detail']),
  // watch: {
  //   id: {
  //     handler () {
  //       console.log('====== this.id')
  //       console.log(this.id)
  //       products.asyncFind(this.$store.getters['product/detail'].id, item => {
  //         this.item = item
  //       })
  //     },
  //     immediate: true
  //   }
  // },
  created () {
    console.log('====== created')
    console.log(this.$store.getters['product/detail'].name)
  }
}
</script>
