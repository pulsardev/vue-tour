import Vue from 'vue'
import App from './App.vue'

/**
 * Import Vue Tour for development or test purposes.
 * The prerequisites are that you must have a `vue-tour` folder next to this landing root folder.
 * It can be done by cloning `vue-tour` and using a worktree:
 *
 * `git worktree add ../vue-tour-landing landing`
 *
 * If you want to use the built version use:
 *
 * import VueTour from '../../vue-tour'
 * import '../../vue-tour/dist/vue-tour.css'
 *
 * Otherwise to directly use the sources use:
 *
 * import VueTour from '../../vue-tour/src/main'
 */
// import VueTour from '../../vue-tour'
// import '../../vue-tour/dist/vue-tour.css'
import VueTour from '../../vue-tour/src/main'

Vue.use(VueTour)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
