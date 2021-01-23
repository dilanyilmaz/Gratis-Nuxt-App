import { mount } from '@vue/test-utils'
import altK from '../components/altKategoriler.vue';


test('textlerimizi kontrol ediyoruz', async () => {
    const wrapper = mount(altK)
  
    const textInput = wrapper.find('input[type="text"]')
    await textInput.setValue('herhangi bi değer...')
  
    expect(wrapper.find('input[type="text"]').element.value).toBe('herhangi bi değer...')
  })

test('checkboxlarımızı kontrol ediyoruz', async () => {
  const wrapper = mount(altK)
  const checkboxInput = wrapper.find('input[type="checkbox"]')

  await checkboxInput.setChecked()

  expect(checkboxInput.element.checked).toBeTruthy()
})

