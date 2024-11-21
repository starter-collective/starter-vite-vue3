import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheCard from '../src/components/TheCard.vue'

describe('test for TheCard.vue', () => {
  it('renders the slot content', () => {
    const wrapper = mount(TheCard, {
      slots: {
        default: '<p>Card Content</p>',
      },
    })
    expect(wrapper.html()).toContain('<p>Card Content</p>')
  })
})
