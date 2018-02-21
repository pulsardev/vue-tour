import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueTour from '@/main'
import VTour from '@/components/VTour.vue'

Vue.use(VueTour)

describe('VTour.vue', () => {
  it('has the correct number of steps', () => {
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
})
