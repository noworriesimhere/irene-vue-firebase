<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Something Blooms</router-link
        >
      </div>
      <div class="edit-mode" v-if="$store.state.user">
        <span
          @click="signOut"
          style="cursor: pointer; text-decoration: underline"
          >Log Out</span
        >

        <label class="switch">
          <input type="checkbox" v-model="editContent" />
          <div>
            <span></span>
          </div>
        </label>
        <button class="button" v-if="editContent">New Page</button>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }"
            >Main Page</router-link
          >
          <router-link class="link" :to="{ name: 'About' }"
            >About Me</router-link
          >
          <router-link class="link" :to="{ name: 'Mywork' }"
            >Past Work</router-link
          >
          <router-link class="link" :to="{ name: 'Contact' }"
            >Contact Me</router-link
          >
        </ul>
        <i
          @click="toggleMobileNav"
          :class="
            mobileNav
              ? 'far fa-times-circle fa-2x'
              : 'fas fa-bars menu-icon fa-2x'
          "
          v-show="mobile"
        />
      </div>
    </nav>
    <transition name="mobile-nav">
      <div class="mobile-nav" v-show="mobileNav">
        <ul v-on:click="toggleMobileNav">
          <router-link class="link" :to="{ name: 'Home' }"
            >Main Page</router-link
          >
          <router-link class="link" :to="{ name: 'About' }"
            >About Me</router-link
          >
          <router-link class="link" :to="{ name: 'Mywork' }"
            >Past Work</router-link
          >
          <router-link class="link" :to="{ name: 'Contact' }"
            >Contact Me</router-link
          >
        </ul>
        <Footer showMe="true" />
      </div>
    </transition>
    <transition name="page-transition">
      <div class="page-transition" v-show="transitioning"></div>
    </transition>
  </header>
</template>

<script>
import Footer from "./Footer.vue";

import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Navigation",
  components: {
    Footer,
  },
  computed: {
    editContent: {
      get() {
        return this.$store.state.editContent;
      },
      set(payload) {
        this.$store.commit("toggleEditContent", payload);
      },
    },
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      transitioning: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 850) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },

    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    },

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    transitionPage() {
      this.mobileNav = false;
      this.transitioning = true;
      setTimeout(() => (this.transitioning = false), 500);
    },
  },
  watch: {
    $route() {
      this.transitionPage();
    },
  },
};
</script>

<style lang="scss">
header {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  .link {
    font-weight: 400;
    transition: 0.3s color ease;
    color: var(--color-primary);
    text-decoration: none;

    display: inline-block;
    position: relative;
    margin: 0.5em;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: var(--color-primary);
      opacity: 0;
      transition: opacity 300ms, transform 300ms;
    }

    &:hover::after,
    &:focus::after {
      opacity: 1;
      transform: translate3d(0, 0.5em, 0);
    }
  }

  .router-link-exact-active.link {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      background-color: var(--color-primary);
      opacity: 1;
      transform: translate3d(0, 0.5em, 0);
      transition: opacity 300ms, transform 300ms;
    }
  }

  nav {
    display: flex;
    padding: 0.5em 1em;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 700;
        font-size: 24px;
        color: var(--color-primary);
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;

      ul {
        margin: 0;
      }
    }
  }

  .menu-icon {
    cursor: pointer;
  }

  .mobile-nav {
    margin-top: 0;
    padding: 30px;
    width: 50vw;
    position: fixed;
    height: 100%;
    background-color: var(--color-secondary);
    top: 0;
    left: 0;
    z-index: 99;

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.25s ease;
  }

  .mobile-nav-enter-from {
    transform: translateX(-50vw);
  }

  .mobile-nav-enter-to {
    transform: translateX(0px);
  }

  .mobile-nav-leave-to {
    transform: translateX(-50vw);
  }

  @media (max-width: 510px) {
    .mobile-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 2em 5em 5em 5em;
      width: 100vw;
      height: 40%;
      background-color: var(--color-secondary);
      position: fixed;
      bottom: 0;
      top: unset;
      margin: 0;

      ul {
        text-align: center;
      }
    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
      transition: all 0.5s ease;
    }

    .mobile-nav-enter-from {
      transform: translateY(50vh);
    }

    .mobile-nav-enter-to {
      transform: translateY(0px);
    }

    .mobile-nav-leave-to {
      transform: translateY(50vh);
    }
  }

  .page-transition {
    height: 100vh;
    width: 100vw;
    background-color: var(--color-secondary);
    position: absolute;
    top: 0;
    left: 0;
  }

  .page-transition-enter-active,
  .page-transition-leave-active {
    transition: all 0.25s ease-in-out;
  }

  .page-transition-enter-from {
    transform: translateX(-100vw);
  }

  .page-transition-enter-to {
    transform: translateX(0px);
  }

  .page-transition-leave-to {
    transform: translateX(100vw);
  }
}

.edit-mode {
  position: absolute;
  top: 60px;
  display: flex;
  align-items: center;
  height: 34px;

  @media (max-width: 510px) {
    width: 100%;
  }
}

.switch {
  --line: var(--color-accent);
  --dot: var(--color-tertiary);
  --circle: var(--color-tertiary);
  --duration: 0.3s;
  --text: #9ea0be;
  cursor: pointer;
  margin: 2em;
  input {
    display: none;
    & + div {
      position: relative;
      &:before,
      &:after {
        --s: 1;
        content: "";
        position: absolute;
        height: 4px;
        top: 10px;
        width: 24px;
        background: var(--line);
        transform: scaleX(var(--s));
        transition: transform var(--duration) ease;
      }
      &:before {
        --s: 0;
        left: 0;
        transform-origin: 0 50%;
        border-radius: 2px 0 0 2px;
      }
      &:after {
        left: 28px;
        transform-origin: 100% 50%;
        border-radius: 0 2px 2px 0;
      }
      span {
        padding-left: 56px;
        line-height: 24px;
        color: var(--text);
        &:before {
          --x: 0;
          --b: var(--circle);
          --s: 4px;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          box-shadow: inset 0 0 0 var(--s) var(--b);
          transform: translateX(var(--x));
          transition: box-shadow var(--duration) ease,
            transform var(--duration) ease;
        }
        &:not(:empty) {
          padding-left: 64px;
        }
      }
    }
    &:checked {
      & + div {
        &:before {
          --s: 1;
        }
        &:after {
          --s: 0;
        }
        span {
          &:before {
            --x: 28px;
            --s: 12px;
            --b: var(--dot);
          }
        }
      }
    }
  }
}

.button {
  background: none;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: 0.5em;
  margin: 0 2em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.1s ease;

  &:active {
    transform-origin: 50% 50%;
    transform: scale(0.9);
  }
}
</style>