import { mount } from '@vue/test-utils'
import sepetbtn from '../components/sepetbtn'

describe('sepetbtn kontrolü', () => {
  
  it('verilere sahip mi ', () => {
    expect(typeof sepetbtn.data).toBe('fonksiyon')
  })

})
