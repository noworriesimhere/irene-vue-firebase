import { createStore } from 'vuex'

import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default createStore({
  state: {
    homeCards: [
      {
        title: "Flowers and things",
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
    editContent: null,
    transitioning: false,
    profileEmail: null,
    profileName: null,
    profileId: null,
    user: null,
    sectionTitle: "",
    sectionPhoto: "",
    sectionPhotoURL: "",
    sectionBlogPost: ""
  },
  mutations: {
    toggleEditContent(state, payload) {
      state.editContent = payload;
    },
    updateUser(state, payload) {
      state.user = payload
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileName = doc.data().name;
    }
  },
  actions: {
    async getCurrentUser({commit}) {
      const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
    },
  },
  modules: {
  }
})
