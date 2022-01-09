import HelloWorld from '@/components/HelloWorld.vue'
import { shallowMount } from '@vue/test-utils'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: 'Hello Jest.js' },
    })

    let res = wrapper.text()
    const expected =
      'Hello Jest.js You’ve successfully created a project with Vue 3.'

    expect(res).toEqual(expected)
  })
})
