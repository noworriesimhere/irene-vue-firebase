<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >Something Blooms</router-link
        >
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
      <div v-on:click="toggleMobileNav" class="mobile-nav" v-show="mobileNav">
        <ul>
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
  </header>
</template>

<script>
import Footer from "./Footer.vue";
export default {
  name: "Navigation",
  components: {
    Footer,
  },
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
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

    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
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
}
</style>