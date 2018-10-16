<template>
  <div>
    <div class="section section-hero bg-gray">
      <div id="overview" class="grid-hero container grid-lg text-center">
        <div class="docs-brand">
          <a href="#" @click="$tours['myTour'].start()" class="docs-logo" id="v-step-0">
            <img src="../assets/logo.png" alt="Vue Tour">
            <h2>VUE TOUR</h2>
          </a>
        </div>

        <div class="docs-brand docs-brand--pulsar">
          <a href="https://pulsar.surge.sh/" target="_blank" class="docs-logo docs-logo-pulsar" id="v-step-0-1">
            <h2>PULSAR</h2>
          </a>
        </div>

        <h1>vue-tour</h1>
        <h2>a <u>Lightweight</u>, <u>Simple</u> and <u>Customizable</u> tour plugin for use with Vue.js</h2>

        <p>
          <a href="https://pulsar.gitbooks.io/vue-tour/" class="btn btn-primary btn-lg mr-2">Docs</a>
          <a href="https://github.com/pulsardev/vue-tour" target="_blank" rel="noopener" class="btn btn-primary btn-lg">GitHub</a>
        </p>

        <p>
          <a class="github-button" href="https://github.com/pulsardev/vue-tour" data-size="large" data-show-count="true" aria-label="Star pulsardev/vue-tour on GitHub">Star</a>
        </p>

        <p class="text-gray">Latest version: <span class="version">{{ version }}</span></p>
        <div class="columns">
          <div class="column col-4 col-xs-12">
            <div class="card text-center">
              <div class="card-header">
                <span class="card-title">Lightweight</span>
              </div>
              <div class="card-body">
                Vue Tour is composed of just two Vue components and a very small JavaScript file.
              </div>
            </div>
          </div>
          <div class="column col-4 col-xs-12">
            <div class="card text-center" id="v-step-1">
              <div class="card-header">
                <span class="card-title">Simple</span>
              </div>
              <div class="card-body">
                Add an array of steps in your component and a 'v-tour' component in your template and you're good to go!
              </div>
            </div>
          </div>
          <div class="column col-4 col-xs-12">
            <div class="card text-center">
              <div class="card-header">
                <span class="card-title">Customizable</span>
              </div>
              <div class="card-body">
                You can change the DOM of every steps independently, use your own classes and even add custom animations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-features bg-primary text-light text-center">
      <div class="container grid-lg">
        <h2>Introduction</h2>
        <div class="columns">
          <div class="column col-10 col-sm-12 col-mx-auto text-left">
            <p class="text-secondary">
              Vue Tour provides a quick and easy way to guide your users through your application.
              You can control the tour on this page by clicking the following buttons.
            </p>
          </div>
          <div class="column col-10 col-sm-12 col-mx-auto">
            <my-tour></my-tour>
          </div>
          <div class="column col-10 col-sm-12 col-mx-auto">
            <a href="https://github.com/pulsardev/vue-tour" class="btn btn-lg" id="v-step-2">Install Vue Tour</a>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-updates bg-gray">
      <div class="container grid-lg">
        <div class="columns">
          <div class="column col-6 col-xs-12">
            <div class="card" id="v-step-3">
              <div class="card-header">
                <div class="card-title h6">PayPal Donate</div>
              </div>
              <div class="card-body">
                Vue Tour is completely free to use. If you enjoy it, please consider donating for the further development. ♥
              </div>
              <div class="card-footer">
                <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CLK49A83DXCQ8" class="btn btn-primary" target="_blank">Donate</a>
              </div>
            </div>
          </div>
          <div class="column col-6 col-xs-12">
            <div class="card">
              <div class="card-header">
                <div class="card-title h6">Vue Tour Docs</div>
              </div>
              <div class="card-body">
                Go to our documentation if you want to use Vue Tour in a more advanced way.
              </div>
              <div class="card-footer">
                <a href="https://pulsar.gitbooks.io/vue-tour/" class="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="section section-footer">
      <div id="copyright" class="grid-footer container grid-lg">
        <p><a href="https://pulsar.gitbooks.io/vue-tour/" target="_blank">Documents</a> | <a href="https://github.com/pulsardev/vue-tour" target="_blank">GitHub</a> | <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=CLK49A83DXCQ8" target="_blank">PayPal Donate</a> | Version <span class="version">{{ version }}</span></p>
        <p>Built with <span class="text-error">♥</span> by <a href="https://pulsar.surge.sh" target="_blank">Pulsar</a>. Licensed under the <a href="https://github.com/pulsardev/vue-tour/blob/master/LICENSE" target="_blank">MIT License</a>.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import MyTour from '@/components/MyTour.vue'

export default {
  name: 'home',
  components: {
    MyTour
  },
  data () {
    return {
      version: '1.0.1'
    }
  }
}
</script>
