<template>
  <div class="v-step" :id="'v-step-' + hash" :ref="'v-step-' + hash">
    <slot name="content">
      <span v-if="step.content" v-html="step.content"></span>
      <span v-else>This is a step! {{ hash }} {{ step.target }}</span>
    </slot>

    <slot name="actions">
      <div>
        <button @click="previousStep">Previous</button>
        <button @click="nextStep">Next</button>
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

<style scoped>
  .v-step {
    background: #ffc107;
    color: black;
    max-width: 256px;
    border-radius: 3px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    padding: 10px;
    text-align: center;
  }

  .v-step .v-step__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }

  .v-step .v-step__arrow {
    border-color: #ffc107;
  }

  .v-step[x-placement^="top"] {
    margin-bottom: 5px;
  }

  .v-step[x-placement^="top"] .v-step__arrow {
    border-width: 5px 5px 0 5px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-step[x-placement^="bottom"] {
    margin-top: 5px;
  }

  .v-step[x-placement^="bottom"] .v-step__arrow {
    border-width: 0 5px 5px 5px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }

  .v-step[x-placement^="right"] {
    margin-left: 5px;
  }

  .v-step[x-placement^="right"] .v-step__arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent;
    border-top-color: transparent;
    border-bottom-color: transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .v-step[x-placement^="left"] {
    margin-right: 5px;
  }

  .v-step[x-placement^="left"] .v-step__arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
</style>
