<template>
  <div class="home">
    <h1>Product Review Detail</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    console.log('component ReveiwDetail:beforeRouteEnter', this)
    next(vm => {
      console.log(vm)
    })
  },
  beforerouteUpdate (to, from, next) {
    console.log('component ReveiwDetail:beforeRouteUpdate', this)
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('component ReveiwDetail:beforeRouteLeve', this)
    next()
  }
}
</script>
