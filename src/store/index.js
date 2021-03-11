import { createStore } from 'vuex'

export default createStore({
  state: {
     botonA: 0,
     botonB: 0,
     botonP: 0,
  },
  mutations: {
    aumentarA(state){
      state.botonA ++
    },
    aumentarB(state){
      state.botonB ++
    },
    aumentarP(state){
      state.botonP ++
    }
  },
  actions: {
  },
  modules: {
  }
})
