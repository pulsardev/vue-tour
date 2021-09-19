# Configuration

When initializing your tour, you may pass an object to the options prop.

Your custom configuration object doesn't need to (re)declare every values, you only need to define what you want to change.

This prop currently support the following properties:

| Option | Default | Description |
|---|---|---|
| `useKeyboardNavigation` | `true` | If set to `true` you may use the ←, → and ESC keys to navigate through your tour. |
| `startTimeout` | `0` | Defines the timeout before which the tour starts. |


You can also customize the labels of the tour's buttons.

```js
labels: {
  buttonSkip: 'Skip tour',
  buttonPrevious: 'Previous',
  buttonNext: 'Next',
  buttonStop: 'Finish'
}
```

## Example

```html
<template>
  <div>
    <div id="v-step-0">A DOM element on your page.</div>
    <div id="v-step-1">A DOM element on your page.</div>
    <div id="v-step-2">A DOM element on your page.</div>

    <v-tour name="myTour" :steps="steps" :options="options" />
  </div>
</template>

<script>
  export default {
    name: 'my-tour',
    data () {
      return {
        options: {
          useKeyboardNavigation: false,
          labels: {
            buttonSkip: 'Skip tour',
            buttonPrevious: 'Previous',
            buttonNext: 'Next',
            buttonStop: 'Finish'
          }
        },
        steps: [
           // ... Your steps array
        ]
      }
    },
    mounted () {
      this.$tours['myTour'].start()
    }
  }
</script>
```
