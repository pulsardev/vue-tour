# Callbacks

Vue Tour provides callbacks to allow you to perform custom actions at different moments of the tour. For exemple if you want to call an API when the user goes to the 2nd step of your tour, fire a Google Analytics event, etc.

To use callbacks, add a callbacks props to the v-tour component:

```vue
<v-tour name="myTour" :steps="steps" :callbacks="myCallbacks" />
```

Where `myCallbacks` is an object containing your methods. For exemple here, we define an object with two callbacks:

```js
data: () => ({
  myCallbacks: {
    onPreviousStep: this.myCustomPreviousStepCallback,
    onNextStep: this.myCustomNextStepCallback
  }
})
```

And then, you have to declare your methods, like so:

```js
methods: {
  myCustomPreviousStepCallback (currentStep) {
    console.log('[Vue Tour] A custom previousStep callback has been called on step ' + (currentStep + 1))
  },
  myCustomNextStepCallback (currentStep) {
    console.log('[Vue Tour] A custom nextStep callback has been called on step ' + (currentStep + 1))

    if (currentStep === 1) {
      console.log('[Vue Tour] A custom nextStep callback has been called from step 2 to step 3')
    }
  }
}
```

## List

| Name | Called when you... |
| --- | --- |
| `onStart` | start the tour |
| `onPreviousStep` | go to a previous step |
| `onNextStep` | go to a next step |
| `onSkip` | skip the tour |
| `onFinish` | end the tour |
