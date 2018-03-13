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
import { DEFAULT_OPTIONS, KEYS } from '../shared/constants'

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
    customOptions: {
      type: Object,
      default: () => { return DEFAULT_OPTIONS }
    }
  },
  data () {
    return {
      currentStep: -1
    }
  },
  mounted () {
    this.$tours[this.name] = this

    if (this.options.useKeyboardNavigation) {
      window.addEventListener('keyup', e => {
        // TODO: debug mode
        // console.log('[Vue Tour] A keyup event occured:', e)
        switch (e.keyCode) {
          case KEYS.ARROW_RIGHT:
            this.nextStep()
            break
          case KEYS.ARROW_LEFT:
            this.previousStep()
            break
          case KEYS.ESCAPE:
            this.stop()
            break
        }
      })
    }
  },
  beforeDestroy () {
    // Remove the keyup listener if it has been defined
    if (this.options.useKeyboardNavigation) {
      window.removeEventListener('keyup')
    }
  },
  computed: {
    // Allow us to define custom options and merge them with the default options.
    // Since options is a computed property, it is reactive and can be updated during runtime.
    options () {
      return {
        ...DEFAULT_OPTIONS,
        ...this.customOptions
      }
    },
    // Return true if the tour is active, which means that there's a VStep displayed
    isRunning () {
      return this.currentStep > -1 && this.currentStep < this.numberOfSteps
    },
    isFirst () {
      return this.currentStep === 0
    },
    isLast () {
      return this.currentStep === this.steps.length - 1
    },
    numberOfSteps () {
      return this.steps.length
    }
  },
  methods: {
    start () {
      // Wait for the DOM to be loaded, then start the tour
      setTimeout(() => {
        this.currentStep = 0
      }, this.options.startTimeout)
    },
    previousStep () {
      if (this.currentStep > 0) this.currentStep--
    },
    nextStep () {
      if (this.currentStep < this.numberOfSteps - 1) this.currentStep++
    },
    stop () {
      this.currentStep = -1
    }
  }
}
</script>
