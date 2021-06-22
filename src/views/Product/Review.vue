<template>
  <div class="home">
    <h1>Product Review</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('component Reveiw:beforeRouteEnter', this)
    next(vm => {
      console.log(vm)
    })
  },
  beforerouteUpdate (to, from, next) {
    console.log('component Reveiw:beforeRouteUpdate', this)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('component Reveiw:beforeRouteLeve', this)
    next()
  }
}
</script>
