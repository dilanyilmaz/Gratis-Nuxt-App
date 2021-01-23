//bu kişi ile eşleşen bir kişi var mı kontrol edilecek
const user ={
    name:'Dilan Yılmaz',
    age: 23,
    job:'student'
}

test ('kulllanıcı eşlelti mi', () => {
    expect(user).toMatchSnapshot()
})

//çalışıyor