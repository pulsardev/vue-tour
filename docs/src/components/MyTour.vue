<template>
  <div>
    <button @click="$tours['myTour'].start()" class="btn btn-lg">Start the tour</button>
    <button @click="nextStep" class="btn btn-lg">Next step</button>
    <button @click="showLastStep" class="btn btn-lg">Show last step</button>

    <v-tour name="myTour" :steps="steps">
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
            <template v-if="tour.currentStep === 2">
              <div slot="actions">
                <button @click="tour.previousStep" class="btn btn-primary btn-lg">Previous step</button>
                <button @click="tour.nextStep" class="btn btn-primary btn-lg">Next step</button>
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
            content: 'Try it, you\'ll love it!<br>You can put HTML in the steps and completely customize the DOM to suit your needs.',
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
      this.$tours['myTour'].start()
    },
    methods: {
      nextStep () {
        this.$tours['myTour'].nextStep()
      },
      showLastStep () {
        this.$tours['myTour'].currentStep = this.steps.length - 1
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
