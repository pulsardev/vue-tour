import { expect } from 'chai'
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

    expect(wrapper.text()).to.include(step.content)
  })

  it('calls skip and finish without value', () => {
    const step = {
      target: 'v-step-0',
      content: 'This is a demo step!'
    }

    let i = 0
    const mockstop = () => {
      i++
    }

    // We don't provide skip and finish function
    const wrapper = shallowMount(VStep, {
      propsData: {
        step,
        stop: mockstop,
        labels
      }
    })

    expect(i).to.equal(0)

    // When call stop, the value of i changes
    wrapper.vm.stop()
    expect(i).to.equal(1)

    // When call skip, the stop function is called
    wrapper.vm.skip()
    expect(i).to.equal(2)

    // When call finish, the stop function is called
    wrapper.vm.finish()
    expect(i).to.equal(3)
  })
})
