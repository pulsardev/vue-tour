# Getting Started

## Installation

- You can install Vue Tour using `npm` or `yarn`.

```bash
npm install vue-tour
# or
yarn add vue-tour
```

- Import the plugin in your application entry point (typically `main.js` if you used vue-cli to scaffold your project) and tell Vue to use it. Also don't forget to include the styles. You can add the styles provided by default or customize them to your own liking.

```js
import Vue from 'vue'
import App from './App.vue'
import VueTour from 'vue-tour'

require('vue-tour/dist/vue-tour.css')

Vue.use(VueTour)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

- Finally put a `v-tour` component in your template anywhere in your app (usually in App.vue) and pass it an array of steps.

```vue
<template>
  <div>
    <div id="v-step-0">A DOM element on your page. The first step will pop on this element because its ID is 'v-step-0'.</div>
    <div class="v-step-1">A DOM element on your page. The second step will pop on this element because its ID is 'v-step-1'.</div>
    <div data-v-step="2">A DOM element on your page. The third and final step will pop on this element because its ID is 'v-step-2'.</div>

    <v-tour name="myTour" :steps="steps" />
  </div>
</template>

<script>
  export default {
    name: 'my-tour',
    data () {
      return {
        steps: [
          {
            target: '#v-step-0',  // We're using document.querySelector() under the hood
            content: `Discover <strong>Vue Tour</strong>!`
          },
          {
            target: '.v-step-1',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '[data-v-step="2"]',
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
            params: {
              placement: 'top'
            }
          }
        ]
      }
    },
    mounted: function () {
      this.$tours['myTour'].start()
    }
  }
</script>
```

The target of your steps may use any valid selector with `document.querySelector()` which is what we use under the hood. Once this is done and your steps correctly target some DOM elements of your application, you can start the tour by calling the following method.

```js
this.$tours['myTour'].start()
```

Note: as we query the DOM elements directly, it's important that the DOM is already initialized when you call the `start` method. Therefore, you should always start the tour in the `mounted` hook or afterwards (not in the created `hook`).
