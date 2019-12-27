import Vue from 'vue'
import App from './App.vue'
import VueTour from 'vue-tour'
// import VueTour from '../../src/main'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
