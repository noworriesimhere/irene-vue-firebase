<template>
  <Navigation />
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer />
</template>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer.vue";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
  data() {
    return {};
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser");
      }
    });
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;700&display=swap");

:root {
  --color-background: rgb(243, 243, 243);
  --color-accent: hsla(13, 68%, 63%, 1);
  --color-tertiary: hsla(234, 20%, 30%, 1);
  --color-primary: hsla(151, 24%, 30%, 1);
  --color-secondary: hsla(37, 79%, 75%, 1);
}

* {
  box-sizing: border-box;
}

html {
  height: -webkit-fill-available;
}

body {
  min-height: 100vh;
  min-height: -webkit-fill-available;
  overflow: hidden;
  margin: 0;
  font-family: "Comfortaa", cursive;
  background-color: var(--color-background);
  color: var(--color-primary);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

.error {
  text-align: center;
  color: red;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
