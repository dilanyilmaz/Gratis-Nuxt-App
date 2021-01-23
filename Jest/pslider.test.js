import { mount } from '@vue/test-utils'
import ps from '../components/productSlider.vue';

const wrapper = mount(ps)

describe('divleri kontrol ediyoruz', () => {
  
    it('tüm divlere bakarız', () => {
        expect(wrapper.findAll('div').exists()).toBe(true)
    })
    
    it('eşleşme de doğru döndermeli', () => {
        expect(wrapper.exists()).toBe(true)
    })
  })



