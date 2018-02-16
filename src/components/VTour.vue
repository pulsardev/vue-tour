<template>
  <div class="v-tour">
    <slot
      :current-step="currentStep"
      :steps="steps"
      :previous-step="previousStep"
      :next-step="nextStep"
      :stop="stop"
      :isFirst="isFirst"
      :isLast="isLast"
    >
      <!--Default slot {{ currentStep }}-->
      <v-step
        v-if="currentStep === index"
        v-for="(step, index) of steps"
        :key="index"
        :step="step"
        :previous-step="previousStep"
        :next-step="nextStep"
        :stop="stop"
        :isFirst="isFirst"
        :isLast="isLast"
      >
        <!--<div v-if="index === 2" slot="actions">
          <a @click="nextStep">Next step</a>
        </div>-->
      </v-step>
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'v-tour',
    props: {
      steps: {
        type: Array,
        default: []
      },
      name: {
        type: String
      }
    },
    data () {
      return {
        currentStep: -1
      }
    },
    mounted () {
      this.$tours[this.name] = this
    },
    computed: {
      isFirst () {
        return this.currentStep === 0
      },
      isLast () {
        return this.currentStep === this.steps.length - 1
      }
    },
    methods: {
      start () {
        // Wait for the DOM to be loaded, then start the tour
        setTimeout(() => {
          this.currentStep = 0
        })
      },
      previousStep () {
        this.currentStep--
      },
      nextStep () {
        this.currentStep++
      },
      stop () {
        this.currentStep = -1
      }
    }
  }
</script>

<style scoped>

</style>
