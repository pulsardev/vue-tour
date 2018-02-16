import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueTour from '../../src/main'

Vue.use(VueTour)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
