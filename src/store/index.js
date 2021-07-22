import { createStore } from 'vuex'
import home from '../assets/pages/home.json'
import about from '../assets/pages/about.json'
import myWork from '../assets/pages/myWork.json'
import contact from '../assets/pages/contact.json'


export default createStore({
  state: {
    homeCards: home.cards,
    aboutCards: about.cards,
    myWorkCards: myWork.cards,
    contactCards: contact.cards
  },
  mutations: {
  
  },
  actions: {
  },
  modules: {
  }
})
