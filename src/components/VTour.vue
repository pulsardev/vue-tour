<template>
  <div>
    <v-step v-for="(step, index) in steps" :step="step" :key="index" :index="index"></v-step>
  </div>
</template>

<script>
  class Tour {
    constructor (name, steps) {
      this.name = name
      this.steps = steps
    }

    addStep (el, ...params) {
      this.steps.push({el, params})
    }
  }

  export default {
    name: 'v-tour',
    props: {
      steps: {
        type: Array,
        default: []
      },
      name: {
        type: String
      }
    },
    mounted () {
      console.log(this.$tours)
      this.$tours[this.name] = new Tour(this.name, this.steps)
    }
  }
</script>

<style scoped>

</style>
