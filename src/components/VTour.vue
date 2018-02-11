<template>
  <div class="v-tour">
    <slot
      v-if="isRunning"
      :current-step="currentStep"
      :steps="steps"
      :previous-step="previousStep"
      :next-step="nextStep"
    >
      Default slot
      <v-step
        v-if="currentStep === index"
        v-for="(step, index) of steps"
        :key="index"
        :step="step"
        :previous-step="previousStep"
        :next-step="nextStep"
      >
        <!--<div v-if="index === 2" slot="actions">
          <a @click="nextStep">TEST</a>
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
        isRunning: false,
        currentStep: 0
      }
    },
    mounted () {
      this.$tours[this.name] = this
    },
    methods: {
      start () {
        // Wait for the DOM to be loaded, then start the tour
        setTimeout(() => {
          this.isRunning = true
        })
      },
      previousStep () {
        this.currentStep--;
      },
      nextStep () {
        this.currentStep++;
      }
    }
  }
</script>

<style scoped>

</style>
