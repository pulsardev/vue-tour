import { expect } from 'chai'
import { shallow } from '@vue/test-utils'
import VStep from '@/components/VStep.vue'

describe('VStep.vue', () => {
  it('renders props.step.content', () => {
    const step = {
      target: 'v-step-0',
      content: 'This is a demo step!'
    }

    const wrapper = shallow(VStep, {
      propsData: {
        step,
        stop: () => {}
      }
    })

    expect(wrapper.text()).to.include(step.content)
  })
})
