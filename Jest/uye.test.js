import uye from '../components/uye.vue';

jest.disableAutomock();
  // geçerli kod 
test('eşleşme gerçekleşti mi', () => {
  expect(uye.authorize()).toBe('ruj');
});

//aşağıdaki koddan da hata alırız 
/*
test('eşleşme gerçekleşti mi', () => {
  expect(uye.authorize()).toBe('rujjj');
});
*/

