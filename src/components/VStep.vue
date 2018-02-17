<template>
  <div class="v-step" :id="'v-step-' + hash" :ref="'v-step-' + hash">
    <slot name="content">
      <div class="v-step__content">
        <span v-if="step.content" v-html="step.content"></span>
        <span v-else>This is a demo step! The id of this step is {{ hash }} and it targets {{ step.target }}</span>
      </div>
    </slot>

    <slot name="actions">
      <div class="v-step__buttons">
        <button @click="stop" v-if="!isLast" class="v-step__button">Skip tour</button>
        <button @click="previousStep" v-if="!isFirst" class="v-step__button">Previous</button>
        <button @click="nextStep" v-if="!isLast" class="v-step__button">Next</button>
        <button @click="stop" v-if="isLast" class="v-step__button">Finish</button>
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

      targetElement.scrollIntoView({behavior: 'smooth'})

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
    background: #50596c; /* #ffc107, #35495e */
    color: white;
    max-width: 320px;
    border-radius: 3px;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
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
    border-color: #50596c; /* #ffc107, #35495e */
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
    background: transparent;
    border: .05rem solid white;
    border-radius: .1rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    line-height: 1rem;
    outline: none;
    text-align: center;
    text-decoration: none;
    transition: all .2s ease;
    vertical-align: middle;
    white-space: nowrap;
    font-size: .9rem;
    height: 2rem;
    padding: .45rem .6rem;

    &:hover {
      background-color: rgba(white, 0.95);
      color: #50596c;
    }
  }
</style>
