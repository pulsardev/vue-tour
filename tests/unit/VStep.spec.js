import { shallowMount } from '@vue/test-utils'
import VStep from '@/components/VStep.vue'

const labels = {}

describe('VStep.vue', () => {
  it('renders props.step.content', () => {
    const step = {
      target: 'v-step-0',
      content: 'This is a demo step!'
    }

    const wrapper = shallowMount(VStep, {
      propsData: {
        step,
        stop: () => {},
        labels
      }
    })

    expect(wrapper.text()).toContain(step.content)
  })
})
