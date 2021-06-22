import Vue from 'vue'
import Vuex from 'vuex'
import product from '@/store/product.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product
  },
  state: {
    isAuthed: true
  },
  getters: {
    getIsAuthed: function (state) {
      return state.isAuthed
    }
  }

})
export default store
