<template>
  <div>
    <slot v-if="isRunning">
      Default slot
      <v-step
        v-if="currentStep === index"
        v-for="(step, index) of steps"
        :key="index"
        :step="step"
        :previous-step="previousStep"
        :next-step="nextStep"
      >
        <div v-if="index === 2" slot="actions">
          <a @click="nextStep">TEST</a>
        </div>
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
      },
      // currentStep: {
      //   type: Number
      // }
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
        // Wait until all DOM elements are rendered
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
