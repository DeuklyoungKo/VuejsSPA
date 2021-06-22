import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import ProductList from '@/views/ProductList.vue'
import ProductHome from '@/views/Product/Home.vue'
import ProductReview from '@/views/Product/Review.vue'
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue'
import store from '@/store/index.js'

Vue.use(Router)

const router = new Router({
  base: '/my-app/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product/',
      name: 'ProductList',
      component: ProductList,
      beforeEnter (to, from, next) {
        console.log('route:beforeEnter')
        next()
      }
    },
    {
      path: '/product/:id',
      // name: 'Product',
      component: Product,
      props: route => ({id: Number(route.params.id)}),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview,
          meta: { requiresAuth: true }
        },
        {
          name: 'review-detail',
          path: 'review/:rid',
          component: ProductReviewDetail
        }
      ]

    },
    { path: '/a', redirect: '/' },
    { path: '/b', redirect: { name: 'Home' } }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('global:beforeEach')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log('to.matched.some(record => record.meta.requiresAuth)')
    const isAuthed = false

    console.log(store.getters['product/detail'].name)
    // if (!auth.loggedIn()) {
    if (!isAuthed) {
      console.log('!isAuthed')
      next({
        pth: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      console.log('isAuthed')
      next()
    }
  } else {
    next()
  }
})
router.beforeResolve((to, from, next) => {
  console.log('global:beforeResolve')
  next()
})
router.afterEach((to, from) => {
  console.log('global:afterEach')
})

export default router
