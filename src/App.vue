<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2 id="v-step-2">Essential Links</h2>
    <ul>
      <li><a id="v-step-3" href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2 id="v-step-0">Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2 id="v-step-1">Test</h2>
    <button @click="externalNextStep">Next step</button>
    <button @click="showStep">Show step</button>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>

    <v-tour name="myFirstTour" :steps="steps">
      <template slot-scope="tour">
        App slot {{ tour.currentStep }}
        <transition name="fade">
        <v-step
          v-if="tour.currentStep === index"
          v-for="(step, index) of tour.steps"
          :key="index"
          :step="step"
          :previous-step="tour.previousStep"
          :next-step="tour.nextStep"
          :stop="tour.stop"
          :isFirst="tour.isFirst"
          :isLast="tour.isLast"
        >
          <div v-if="index === 2" slot="actions">
            <a @click="tour.nextStep">NEXT STEP</a>
          </div>
        </v-step>
        </transition>
      </template>
    </v-tour>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        steps: [
          {
            target: '#v-step-0',
            content: `Découvrez <strong>Vue Tour</strong> !`
          },
          {
            target: '#v-step-1',
            content: 'Un super plugin en Vue !'
          },
          {
            target: '#v-step-2',
            content: 'L\'essayer c\'est l\'adopter',
            params: {
              placement: 'top'
            }
          },
          {
            target: '#v-step-3',
            params: {
              placement: 'left'
            }
          }
        ]
      }
    },
    mounted: function () {
      this.$tours['myFirstTour'].start()
    },
    methods: {
      externalNextStep () {
        this.$tours['myFirstTour'].nextStep()
      },
      showStep () {
        this.$tours['myFirstTour'].currentStep = 2
      }
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
