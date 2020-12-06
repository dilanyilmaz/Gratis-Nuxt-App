
export const state = () => ({
    members:[{
      email:"dilan@gmail.com",
      sifre:"1234",
      id:1
    }]
  })

export const mutations ={
  addUser(state ,payload){
    let newUser ={
      ...payload
    }
    state.members.push(newUser)
  }
}