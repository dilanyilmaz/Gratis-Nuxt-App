import { mount } from '@vue/test-utils'
import ms from '../components/mainslider.vue';

const Slistesi = [
    'S1',
    'S2',
    'S3',
    'S4',
    'S5',
  ];
  
  test('slite listesi s5 imagine sahip mi ', () => {
    expect(Slistesi).toContain('S5');
    expect(new Set(Slistesi)).toContain('S5');
  });
