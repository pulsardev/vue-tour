# Features

## `before()`

If you need to do UI setup work before a step, there's a `before` function you may include in any/each of your steps. This function will get invoked before the start/next/previous step is rendered. The function must return a promise. The function is invoked when `start`, `nextStep`, and `previousStep` are triggered. When the promise is rejected, it will not move to the next or previous step. If the promise is resolved then it will move in the direction specified.

It's used when you need to change what's shown on the screen between steps. For example, you may want to hide one set of menus and open a screen or you want to perform an async operation. This is especially useful in single-page applications.

```js
steps: [
  {
    target: '#v-step-0',  // We're using document.querySelector() under the hood
    content: `Discover <strong>Vue Tour</strong>!`,
    before: type => new Promise((resolve, reject) => {
      // Time-consuming UI/async operation here
      resolve('foo')
    })
  }
]
```

## Debug

Vue Tour comes with debug option, allowing you to see logs from the plugin. By default, you won't be able to see debug logs such as: `[Vue Tour] Highlight is disabled for .v-step[id="b4820cfe"]`.

```vue
<v-tour name="myTour" :steps="steps" :callbacks="callbacks" :options="{ debug: true }">
```

## Highlight

You can highlight the element showcased by the current step by setting the `highlight` option to true.

```vue
<v-tour name="myTour" :steps="steps" :callbacks="callbacks" :options="{ highlight: true }">
```

You can also disable the highlight on a step basis by using step params.

```js
data () {
  return {
    steps: [
      {
        target: '#v-step-0',
        content: `Discover <strong>Vue Tour</strong>!`,
        params: {
          highlight: false
        }
      },
      ...
    ]
  }
}
```


## Caveats

If you are customizing the template, don't forget to pass the highlight property to the `VStep` props:

```
<v-step
  v-if="tour.steps[tour.currentStep]"
  :step="tour.steps[tour.currentStep]"
  ...
  :highlight="tour.highlight"
>
```

## Disable scroll between steps

By default Vue Tour scrolls between each steps. You can override this behavior by adding `enableScrolling: false` to step params you don't want scroll enabled.

```js
{
  target: '#v-step-0',
  content: `Discover <strong>Vue Tour</strong>!`,
  params: {
    enableScrolling: false
  }
}
```

## Customization

By default the shadow is a solid thin `box-shadow`. If you want to have a full backdrop overlay over the entire viewport you can customize the `.v-tour__target--highlighted` class and set a very large `box-shadow` (99999px for example):

```css
.v-tour__target--highlighted {
  box-shadow: 0 0 0 99999px rgba(0, 0, 0, 0.4);
}
```
