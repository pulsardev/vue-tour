# Template customization

Vue Tour makes an extensive usage of Vue.js slot functionnality to allow you to customize nearly every aspects of the steps of your tour. The simplest way of inserting a tour in your page is by just using a `v-tour` component.

```vue
<v-tour name="myTour" :steps="steps" />
```

This component contains a default `slot` that wraps a `v-for` loop over the steps passed as a prop. And the steps themselves contain three slots: `header`, `content` and `actions`. Then, if you want to override the DOM of the steps you can do it by overriding the slots like so:

```vue
<v-tour name="myTour" :steps="steps">
  <template slot-scope="tour">
    <transition name="fade">
      <v-step
        v-if="tour.steps[tour.currentStep]"
        :key="tour.currentStep"
        :step="tour.steps[tour.currentStep]"
        :previous-step="tour.previousStep"
        :next-step="tour.nextStep"
        :stop="tour.stop"
        :skip="tour.skip"
        :is-first="tour.isFirst"
        :is-last="tour.isLast"
        :labels="tour.labels"
      >
        <template v-if="tour.currentStep === 2">
          <div slot="actions">
            <button @click="tour.previousStep" class="btn btn-primary">Previous step</button>
            <button @click="tour.nextStep" class="btn btn-primary">Next step</button>
          </div>
        </template>
      </v-step>
    </transition>
  </template>
</v-tour>
```

Here we changed only the actions slot of the third step (the count begins at 0). The slot in the `v-tour` component is scoped so that you can use its internal properties and methods.
