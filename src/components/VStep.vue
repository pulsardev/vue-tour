<template>
  <div class="tour-step" :id="'tourStep' + index" :ref="'tourStep' + index">
    This is a step! {{ index }}
  </div>
</template>

<script>
  import Popper from 'popper.js'

  export default {
    name: 'v-step',
    props: {
      index: {
        type: Number,
        default: 0
      },
      step: {
        type: Object
      }
    },
    data () {
      return {
        test: 'Hello'
      }
    },
    mounted () {
      new Popper(
        this.step.el,
        this.$refs['tourStep' + this.index],
        {
          attachment: 'top right',
          targetAttachment: 'top left'
        }
      )
    }
  }
</script>

<style scoped>
  .tour-step {
    background-color: lightgrey;
    padding: 1em;
    box-shadow: 4px 4px 16px 0 #656565;
  }
</style>
