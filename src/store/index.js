import { createStore } from 'vuex'



export default createStore({
  state: {
    homeCards: [
      {
        title: "Flowers and things test",
        blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        photo: "flowers1",
        main: true,
      },
      {
        title: "Lorem, ipsum.",
        blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        photo: "flowers2",
      },
      {
        title: "third.",
        blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        photo: "flowers3",
      },
      {
        title: "Lorem ipsum dolor sit.",
        blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        photo: "flowers4",
      },
    ],
  
  },
  mutations: {
  
  },
  actions: {
  },
  modules: {
  }
})
