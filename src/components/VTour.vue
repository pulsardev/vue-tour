<template>
  <div>
    <slot>
      Default slot
      <v-step
        v-if="currentStep === index"
        v-for="(step, index) of steps"
        :target="step.el"
        :step="step"
        :key="index"
        @previous-step="previousStep"
        @next-step="nextStep"
      ></v-step>
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
      currentStep: {
        type: Number
      }
    },
    mounted () {
    },
    methods: {
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
