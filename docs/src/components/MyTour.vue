<template>
  <div>
    <button @click="$tours['myFirstTour'].start()" class="btn btn-primary">Start the tour</button>
    <button @click="externalNextStep" class="btn btn-primary">External next step</button>
    <button @click="showStep" class="btn btn-primary">Show step</button>

    <v-tour name="myFirstTour" :steps="steps" :on-next-step="onNextStep">
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
                <a @click="tour.previousStep">Previous step</a>
                <a @click="tour.nextStep">Next step</a>
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
      onNextStep (step) {
        
      },
      externalNextStep () {
        this.$tours['myFirstTour'].nextStep()
      },
      showStep () {
        this.$tours['myFirstTour'].currentStep = 2
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
