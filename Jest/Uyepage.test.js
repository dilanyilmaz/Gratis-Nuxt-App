import { mount } from '@vue/test-utils'
import uyep from '../components/Uye.vue';

test('hata döndürürüz testten geçemez içerik yanlış',() => {
    const wrapper = mount(uyep)
    expect(wrapper.html()).toBe(`<div class="home-page"><uye/></div>`)
})