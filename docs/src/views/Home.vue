<template>
  <div>
    <div class="section section-hero bg-gray">
      <div id="overview" class="grid-hero container grid-lg text-center">
        <div class="docs-brand">
          <a href="index.html" class="docs-logo" id="v-step-0">
            <img src="../assets/logo.png" alt="Vue Tour">
            <h2>VUE TOUR</h2>
          </a>
        </div>
        <h1>vue-tour</h1>
        <h2>a <u>Lightweight</u>, <u>Responsive</u> and <u>Modern</u> tour plugin for use with Vue.js</h2>

        <my-tour></my-tour>

        <p>
          <!--<a href="getting-started.html" class="btn btn-primary btn-lg">Docs</a>-->
          <a href="https://github.com/pulsar/vue-tour" target="_blank" class="btn btn-primary btn-lg">GitHub</a>
        </p>
        <p class="text-gray">Latest version: <span class="version">1.0.0</span></p>
        <div class="columns">
          <div class="column col-4 col-xs-12">
            <div class="card text-center">
              <div class="card-header">
                <span class="card-title">Lightweight</span>
              </div>
              <div class="card-body">
                Lightweight  (~10KB gzipped) starting point for your projects
              </div>
            </div>
          </div>
          <div class="column col-4 col-xs-12">
            <div class="card text-center" id="v-step-1">
              <div class="card-header">
                <span class="card-title">Responsive</span>
              </div>
              <div class="card-body">
                Flexbox-based, responsive and mobile-friendly layout
              </div>
            </div>
          </div>
          <div class="column col-4 col-xs-12">
            <div class="card text-center">
              <div class="card-header">
                <span class="card-title">Modern</span>
              </div>
              <div class="card-body">
                Elegantly designed and developed elements and components
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
            <p class="text-secondary">Spectre provides basic styles for typography and elements, flexbox based responsive layout system, pure CSS components and utilities with best practice coding and consistent design language.</p>
          </div>
          <div class="column col-10 col-sm-12 col-mx-auto">
            <a href="getting-started.html#installation" class="btn btn-lg" id="v-step-2">Install Spectre.css</a>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-updates bg-gray">
      <div class="container grid-lg">
        <div class="columns">
          <div class="column col-4 col-xs-12">
            <div class="card">
              <div class="card-header">
                <div class="card-title h6">Spectre Twitter</div>
              </div>
              <div class="card-body">
                For the latest announcements and updates, follow on Twitter: <a href="https://twitter.com/spectrecss" target="_blank">@spectrecss</a>.
              </div>
              <div class="card-footer">
                <a href="https://twitter.com/spectrecss" class="btn btn-primary" target="_blank">Follow</a>
              </div>
            </div>
          </div>
          <div class="column col-4 col-xs-12">
            <div class="card" id="v-step-3">
              <div class="card-header">
                <div class="card-title h6">PayPal Donate</div>
              </div>
              <div class="card-body">
                Spectre.css is completely free to use. If you enjoy it, please consider donating for the further development. ♥
              </div>
              <div class="card-footer">
                <a href="https://www.paypal.me/picturepan2" class="btn btn-primary" target="_blank">Donate</a>
              </div>
            </div>
          </div>
          <div class="column col-4 col-xs-12">
            <div class="card">
              <div class="card-header">
                <div class="card-title h6">Spectre Docs</div>
              </div>
              <div class="card-body">
                Spectre Docs experience has been completely rewritten and improved.
              </div>
              <div class="card-footer">
                <a href="getting-started.html" class="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="section section-footer">
      <div id="copyright" class="grid-footer container grid-lg">
        <p><a href="getting-started.html" target="_blank">Documents</a> | <a href="https://github.com/picturepan2/spectre" target="_blank">GitHub</a> | <a href="https://twitter.com/spectrecss" target="_blank">Twitter</a> | <a href="https://www.paypal.me/picturepan2" target="_blank">PayPal Donate</a> | Version <span class="version"></span></p>
        <p>Designed and built with <span class="text-error">♥</span> by <a href="https://twitter.com/picturepan2" target="_blank">Yan Zhu</a>. Licensed under the <a href="https://github.com/picturepan2/spectre/blob/master/LICENSE" target="_blank">MIT License</a>.</p>
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
  }
}
</script>
