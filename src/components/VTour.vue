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
import constant from '../misc/constant'
const KEY = constant.KEY

export default {
  name: 'v-tour',
  props: {
    steps: {
      type: Array,
      default: () => []
    },
    name: {
      type: String
    },
    config: {
      type: Object,
      default: () => {return {}}
    }
  },
  data () {
    return {
      currentStep: -1,
      minStep: -1,
      isFinished: false,
      defaultConfig: {
        useKeyboardNavigation: true,
        startTimeout: 0
      }
    }
  },
  mounted () {
    this.$tours[this.name] = this

    window.addEventListener('keypress', el => {
      if (this.mergedConfig.useKeyboardNavigation) {
        switch (el.keyCode) {
          case KEY.RIGHT:
            this.nextStep()
            break
          case KEY.LEFT:
            this.previousStep()
            break
          case KEY.ESC:
            this.stop()
            break
        }
      }
    })
  },
  beforeDestroy () {
    // Remove keypress events before getting rid of the component.
    // Might have side-effect if the user already defined a listener on this event.
    window.removeEventListener('keypress')
  },
  computed: {
    // Allow us to define a custom config and merge it with default options
    // so that the user doesn't need to redefine the whole config object.
    // You should only retrieve params from the returned object here and not use this.config
    // Also since defaultConfig is defined in data, it is reactive so the config can be
    // updated during runtime.
    mergedConfig () {
      return Object.assign({}, this.defaultConfig, this.config)
    },
    // Return true if the tour is active, which means that there's a VStep component currently
    // on screen.
    isActive () {
      return this.currentStep > this.minStep && this.currentStep < this.maxStep
    },
    isFirst () {
      return this.currentStep === 0
    },
    isLast () {
      return this.currentStep === this.steps.length - 1
    },
    maxStep () {
      return this.steps.length
    }
  },
  methods: {
    start () {
      // Wait for the DOM to be loaded, then start the tour
      setTimeout(() => {
        this.isFinished = false
        this.currentStep = 0
      }, this.mergedConfig.startTimeout)
    },
    previousStep () {
      if (this.currentStep > this.minStep + 1  && !this.isFinished) this.currentStep--
    },
    nextStep () {
      if (this.currentStep < this.maxStep - 1 && !this.isFinished) this.currentStep++
    },
    stop () {
      this.currentStep = -1
      this.isFinished = true
    }
  }
}
</script>
