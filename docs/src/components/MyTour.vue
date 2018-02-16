<template>
  <div>
    <div class="card">
      <div class="card-body">
        <button @click="$tours['myFirstTour'].start()" class="btn btn-primary">Start the tour</button>
        <button @click="nextStep" class="btn btn-primary">Next step</button>
        <button @click="showLastStep" class="btn btn-primary">Show last step</button>
      </div>
    </div>

    <v-tour name="myFirstTour" :steps="steps">
      <template slot-scope="tour">
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
            <template v-if="tour.currentStep === 1">
              <div slot="actions">
                <button @click="tour.previousStep" class="btn btn-primary">Previous step</button>
                <button @click="tour.nextStep" class="btn btn-primary">Next step</button>
              </div>
            </template>
          </v-step>
        </transition>
      </template>
    </v-tour>
  </div>
</template>

<script>
  export default {
    name: 'my-tour',
    data () {
      return {
        steps: [
          {
            target: '#v-step-0',
            content: `Discover <strong>Vue Tour</strong>!`
          },
          {
            target: '#v-step-1',
            content: 'An awesome plugin made with Vue.js!'
          },
          {
            target: '#v-step-2',
            content: 'Try it, you\'ll love it!',
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
      // this.$tours['myFirstTour'].start()

    },
    methods: {
      nextStep () {
        this.$tours['myFirstTour'].nextStep()
      },
      showLastStep () {
        this.$tours['myFirstTour'].currentStep = this.steps.length - 1
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
