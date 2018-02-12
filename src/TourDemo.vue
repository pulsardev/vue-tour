<template>
  <div>
    <button @click="externalNextStep">External next step</button>
    <button @click="showStep">Show step</button>

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
            <template v-if="index === 1">
              <div slot="actions">
                <a @click="tour.nextStep">NEXT STEP</a>
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
    name: 'tour-demo',
    data () {
      return {
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

<style scoped>

</style>
