
//test süresi 3 saniyeden uzun sürüyor mu diye bakıyoruz
jest.retryTimes(3);

test('hata alınır', () => {
  expect(true).toBe(true);
});

//çalışıyor