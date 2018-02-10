<template>
  <div class="v-step" :id="'v-step-' + hash" :ref="'v-step-' + hash">
    This is a step! {{ hash }} {{ step.target }}
    <div>
      <button @click="previousStep">Previous</button>
      <button @click="nextStep">Next</button>
    </div>
  </div>
</template>

<script>
  import Popper from 'popper.js'
  import sum from 'hash-sum'

  export default {
    name: 'v-step',
    props: {
      step: {
        type: Object
      }
    },
    data () {
      return {
        hash: sum(this.step.target)
      }
    },
    mounted () {
      // this.hash = sum(this.target)
      console.log('hash from ' + this.step.target, this.hash)

      let targetElement = document.querySelector('#' + this.step.target)
      console.log('targetElement', targetElement)

      new Popper(
        targetElement,
        this.$refs['v-step-' + this.hash],
        {
          attachment: 'top right',
          targetAttachment: 'top left'
        }
      )
    },
    methods: {
      previousStep () {
        console.log('previousStep v-step')
        this.$emit('previous-step')
      },
      nextStep () {
        console.log('nextStep v-step')
        this.$emit('next-step')
      }
    }
  }
</script>

<style scoped>
  .v-step {
    background-color: lightgrey;
    padding: 1em;
    box-shadow: 4px 4px 16px 0 #656565;
  }
</style>
