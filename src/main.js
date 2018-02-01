import Vue from 'vue'
import App from './App.vue'
import VueTour from './plugins/vue-tour'

Vue.use(VueTour)

new Vue({
  el: '#app',
  render: h => h(App)
})
