import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheButton from '../src/components/TheButton.vue'

describe('test for TheButton.vue', () => {
  it('renders the slot content', () => {
    const wrapper = mount(TheButton, {
      slots: {
        default: '<span>Button Content</span>',
      },
    })
    expect(wrapper.html()).toContain('<span>Button Content</span>')
  })

  it('is disabled when the disabled prop is true', () => {
    const wrapper = mount(TheButton, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('shows loading spinner when loading prop is true', () => {
    const wrapper = mount(TheButton, {
      props: {
        loading: true,
      },
    })
    expect(wrapper.find('svg').exists()).toBe(true)
  })

  it('does not show loading spinner when loading prop is false', () => {
    const wrapper = mount(TheButton, {
      props: {
        loading: false,
      },
    })
    expect(wrapper.find('svg').exists()).toBe(false)
  })

  it('emits a click event when clicked', async () => {
    const wrapper = mount(TheButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
