import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueTour from '@/main'
import VTour from '@/components/VTour.vue'

Vue.use(VueTour)

const steps = [
  {
    target: '#v-step-0',
    content: `Discover <strong>Vue Tour</strong>!`
  },
  {
    target: '#v-step-1',
    content: 'An awesome plugin made with Vue.js!'
  }
]

describe('VTour.vue', () => {
  it('has the correct number of steps', () => {
    const wrapper = mount(VTour, {
      propsData: {
        name: 'myTestTour',
        steps
      }
    })

    expect(wrapper.vm.steps).to.have.lengthOf(2)
  })

  it('registers itself in the global Vue instance', () => {
    const wrapper = mount(VTour, {
      propsData: {
        name: 'myTestTour',
        steps: []
      }
    })

    expect(wrapper.vm.$tours).to.be.an('object').that.has.all.keys('myTestTour')
  })

  it('stays within the boundaries of the number of steps', done => {
    const wrapper = mount(VTour, {
      propsData: {
        name: 'myTestTour',
        steps
      }
    })

    expect(wrapper.vm.currentStep).to.equal(-1)

    wrapper.vm.start()

    setTimeout(() => {
      expect(wrapper.vm.currentStep).to.equal(0)

      // We call nextStep one more time than needed
      for (let i = 0; i < steps.length; i++) {
        wrapper.vm.nextStep()
      }

      expect(wrapper.vm.currentStep).to.equal(1)

      // We call previousStep one more time than needed
      for (let i = 0; i < steps.length; i++) {
        wrapper.vm.previousStep()
      }

      expect(wrapper.vm.currentStep).to.equal(0)

      wrapper.vm.stop()

      expect(wrapper.vm.currentStep).to.equal(-1)
      done()
    })
  })

  it('skips inactive steps', done => {
    const stepsWithInactive = [
      {
        target: '#v-step-0',
        content: `Discover <strong>Vue Tour</strong>!`
      },
      {
        target: '#v-step-1',
        content: 'inactive',
        active: false
      },
      {
        target: '#v-step-2',
        content: 'An awesome plugin made with Vue.js!'
      }
    ]
    const wrapper = mount(VTour, {
      propsData: {
        name: 'myTestTour',
        steps: stepsWithInactive
      }
    })

    expect(wrapper.vm.currentStep).to.equal(-1)

    wrapper.vm.start()

    setTimeout(() => {
      expect(wrapper.vm.currentStep).to.equal(0)

      wrapper.vm.nextStep()

      expect(wrapper.vm.currentStep).to.equal(2)

      wrapper.vm.previousStep()

      expect(wrapper.vm.currentStep).to.equal(0)

      wrapper.vm.stop()

      expect(wrapper.vm.currentStep).to.equal(-1)
      done()
    })
  })

  it('pass steps on tour.start', done => {
    const customSteps = [
      {
        target: '#v-step-0',
        content: `Discover <strong>Vue Tour</strong>!`
      },
      {
        target: '#v-step-1',
        content: 'Woohooo'
      },
      {
        target: '#v-step-2',
        content: 'An awesome plugin made with Vue.js!'
      }
    ]
    const wrapper = mount(VTour, {
      propsData: {
        name: 'myTestTour',
        steps: []
      }
    })

    expect(wrapper.vm.currentStep).to.equal(-1)

    wrapper.vm.start(customSteps)

    setTimeout(() => {
      expect(wrapper.vm.currentStep).to.equal(0)

      wrapper.vm.nextStep()

      expect(wrapper.vm.currentStep).to.equal(2)

      wrapper.vm.previousStep()

      expect(wrapper.vm.currentStep).to.equal(1)

      wrapper.vm.previousStep()

      expect(wrapper.vm.currentStep).to.equal(0)

      wrapper.vm.stop()

      expect(wrapper.vm.currentStep).to.equal(-1)
      done()
    })
  })
})
