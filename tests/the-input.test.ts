import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import TheInput from '../src/components/TheInput.vue'

describe('test for TheInput.vue', () => {
  it('create and set value', async () => {
    const wrapper = mount(TheInput, {
      props: {
        modelValue: 'text',
      },
    })
    const element = wrapper.element as HTMLInputElement
    expect(element).toBeTruthy()
    expect(element.value).toBe('text')
    await wrapper.setProps({ modelValue: 'new text' })
    expect(wrapper.find('input').element.value).toBe('new text')
  })
})
