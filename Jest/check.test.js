import { mount } from '@vue/test-utils'
import uye from '../components/uye.vue';

// uye page indeki uye componenti tikli mi ona bakıyoruz
test('checkbox box titli', async () => {
    const wrapper = mount(uye)
    const checkboxInput = wrapper.find('input[type="checkbox"]')
  
    await checkboxInput.setChecked()
  
    expect(checkboxInput.element.checked).toBeTruthy()
  })
