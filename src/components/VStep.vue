<template>
  <div class="v-step" :id="'v-step-' + hash" :ref="'v-step-' + hash">
    <slot name="content">
      <div class="v-step__content">
        <span v-if="step.content" v-html="step.content"></span>
        <span v-else>This is a step! {{ hash }} {{ step.target }}</span>
      </div>
    </slot>

    <slot name="actions">
      <div class="v-step__buttons">
        <button @click="stop" class="v-step__button">Quitter</button>
        <button @click="previousStep" v-if="!isFirst" class="v-step__button">Previous</button>
        <button @click="nextStep" v-if="!isLast" class="v-step__button">Next</button>
      </div>
    </slot>

    <div class="v-step__arrow"></div>
  </div>
</template>

<script>
  // import Vue from 'vue'
  import Popper from 'popper.js'
  import sum from 'hash-sum'

  export default {
    name: 'v-step',
    props: {
      step: {
        type: Object
      },
      previousStep: {
        type: Function
      },
      nextStep: {
        type: Function
      },
      stop: {
        type: Function
      },
      isFirst: {
        type: Boolean
      },
      isLast: {
        type: Boolean
      }
    },
    data () {
      return {
        hash: sum(this.step.target)
      }
    },
    mounted () {
      let params = this.step.params ? this.step.params : {}

      console.log('hash from ' + this.step.target, this.hash)

      let targetElement = document.querySelector(this.step.target)
      console.log('targetElement', targetElement)

      new Popper(
        targetElement,
        this.$refs['v-step-' + this.hash],
        {
          placement: params.placement ? params.placement : 'bottom'
        }
      )
    }
  }
</script>

<style lang="scss" scoped>
  .v-step {
    background: #ffc107; /* #ffc107 */
    color: black;
    max-width: 256px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    padding: 1rem;
    text-align: center;
  }

  .v-step .v-step__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 0.5rem;
  }

  .v-step .v-step__arrow {
    border-color: #ffc107; /* #ffc107 */
  }

  .v-step[x-placement^="top"] {
    margin-bottom: 0.5rem;
  }

  .v-step[x-placement^="top"] .v-step__arrow {
    border-width: 0.5rem 0.5rem 0 0.5rem;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    bottom: -0.5rem;
    left: calc(50% - 1rem);
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-step[x-placement^="bottom"] {
    margin-top: 0.5rem;
  }

  .v-step[x-placement^="bottom"] .v-step__arrow {
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -0.5rem;
    left: calc(50% - 1rem);
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-step[x-placement^="right"] {
    margin-left: 0.5rem;
  }

  .v-step[x-placement^="right"] .v-step__arrow {
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    left: -0.5rem;
    top: calc(50% - 1rem);
    margin-left: 0;
    margin-right: 0;
  }

  .v-step[x-placement^="left"] {
    margin-right: 0.5rem;
  }

  .v-step[x-placement^="left"] .v-step__arrow {
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    right: -0.5rem;
    top: calc(50% - 1rem);
    margin-left: 0;
    margin-right: 0;
  }

  /* Custom */

  .v-step__content {
    margin: 0 0 1rem 0;
  }

  .v-step__button {
    cursor: pointer;
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid black;

    &:hover {
      background-color: rgba(white, 0.5);
    }
  }
</style>
