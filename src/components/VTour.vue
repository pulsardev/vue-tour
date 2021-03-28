<template>
  <div class="v-tour">
    <slot
      :current-step="currentStep"
      :steps="steps"
      :previous-step="previousStep"
      :next-step="nextStep"
      :stop="stop"
      :skip="skip"
      :finish="finish"
      :is-first="isFirst"
      :is-last="isLast"
      :labels="customOptions.labels"
      :enabled-buttons="customOptions.enabledButtons"
      :highlight="customOptions.highlight"
      :debug="customOptions.debug"
    >
      <!--Default slot {{ currentStep }}-->
      <v-step
        v-if="steps[currentStep]"
        :step="steps[currentStep]"
        :key="currentStep"
        :previous-step="previousStep"
        :next-step="nextStep"
        :stop="stop"
        :skip="skip"
        :finish="finish"
        :is-first="isFirst"
        :is-last="isLast"
        :labels="customOptions.labels"
        :enabled-buttons="customOptions.enabledButtons"
        :highlight="customOptions.highlight"
        :stop-on-fail="customOptions.stopOnTargetNotFound"
        :debug="customOptions.debug"
        @targetNotFound="$emit('targetNotFound', $event)"
      >
        <!--<div v-if="index === 2" slot="actions">
          <a @click="nextStep">Next step</a>
        </div>-->
      </v-step>
    </slot>
  </div>
</template>

<script>
import { DEFAULT_CALLBACKS, DEFAULT_OPTIONS, KEYS } from '../shared/constants'

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
    options: {
      type: Object,
      default: () => { return DEFAULT_OPTIONS }
    },
    callbacks: {
      type: Object,
      default: () => { return DEFAULT_CALLBACKS }
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
  beforeDestroy () {
    // Remove the keyup listener if it has been defined
    if (this.customOptions.useKeyboardNavigation) {
      window.removeEventListener('keyup', this.handleKeyup)
    }
  },
  computed: {
    // Allow us to define custom options and merge them with the default options.
    // Since options is a computed property, it is reactive and can be updated during runtime.
    customOptions () {
      return {
        ...DEFAULT_OPTIONS,
        ...this.options
      }
    },
    customCallbacks () {
      return {
        ...DEFAULT_CALLBACKS,
        ...this.callbacks
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
    },
    step () {
      return this.steps[this.currentStep]
    }
  },
  methods: {
    async start (startStep) {
      // Register keyup listeners for this tour
      if (this.customOptions.useKeyboardNavigation) {
        window.addEventListener('keyup', this.handleKeyup)
      }

      // Wait for the DOM to be loaded, then start the tour
      startStep = typeof startStep !== 'undefined' ? parseInt(startStep, 10) : 0
      let step = this.steps[startStep]

      let process = () => new Promise((resolve, reject) => {
        setTimeout(() => {
          this.customCallbacks.onStart()
          this.currentStep = startStep
          resolve()
        }, this.customOptions.startTimeout)
      })

      if (typeof step.before !== 'undefined') {
        try {
          await step.before('start')
        } catch (e) {
          return Promise.reject(e)
        }
      }
      await process()

      return Promise.resolve()
    },
    async previousStep () {
      let futureStep = this.currentStep - 1

      let process = () => new Promise((resolve, reject) => {
        this.customCallbacks.onPreviousStep(this.currentStep)
        this.currentStep = futureStep
        resolve()
      })

      if (futureStep > -1) {
        let step = this.steps[futureStep]
        if (typeof step.before !== 'undefined') {
          try {
            await step.before('previous')
          } catch (e) {
            return Promise.reject(e)
          }
        }
        await process()
      }

      return Promise.resolve()
    },
    async nextStep () {
      let futureStep = this.currentStep + 1

      let process = () => new Promise((resolve, reject) => {
        this.customCallbacks.onNextStep(this.currentStep)
        this.currentStep = futureStep
        resolve()
      })

      if (futureStep < this.numberOfSteps && this.currentStep !== -1) {
        let step = this.steps[futureStep]
        if (typeof step.before !== 'undefined') {
          try {
            await step.before('next')
          } catch (e) {
            return Promise.reject(e)
          }
        }
        await process()
      }

      return Promise.resolve()
    },
    stop () {
      this.customCallbacks.onStop()
      document.body.classList.remove('v-tour--active')
      this.currentStep = -1
    },
    skip () {
      this.customCallbacks.onSkip()
      this.stop()
    },
    finish () {
      this.customCallbacks.onFinish()
      this.stop()
    },

    handleKeyup (e) {
      if (this.customOptions.debug) {
        console.log('[Vue Tour] A keyup event occured:', e)
      }
      switch (e.keyCode) {
        case KEYS.ARROW_RIGHT:
          this.isKeyEnabled('arrowRight') && this.nextStep()
          break
        case KEYS.ARROW_LEFT:
          this.isKeyEnabled('arrowLeft') && this.previousStep()
          break
        case KEYS.ESCAPE:
          this.isKeyEnabled('escape') && this.stop()
          break
      }
    },
    isKeyEnabled (key) {
      const { enabledNavigationKeys } = this.customOptions
      return enabledNavigationKeys.hasOwnProperty(key) ? enabledNavigationKeys[key] : true
    }
  }
}
</script>

<style lang="scss">
  body.v-tour--active {
    pointer-events: none;
  }

  .v-tour {
    pointer-events: auto;
  }

  .v-tour__target--highlighted {
    box-shadow: 0 0 0 4px rgba(0,0,0,.4);
    pointer-events: auto;
    z-index: 9999;
  }

  .v-tour__target--relative {
    position: relative;
  }
</style>
