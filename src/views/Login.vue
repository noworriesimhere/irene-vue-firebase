<template>
  <div class="form-container">
    <div class="photo">
      <img src="../assets/img/flowers5.jpg" alt="" />
    </div>
    <div class="form">
      <form class="login" v-if="!$store.state.user">
        <h1>Hey Fren! Login Here</h1>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <i class="fas fa-at"></i>
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
            <i class="fas fa-key"></i>
          </div>
        </div>
        <div v-show="error" class="error">{{ errorMsg }}</div>
        <div class="input">
          <button class="button" @click.prevent="signIn">Log In</button>
        </div>
        <router-link :to="{ name: 'Forgotpassword' }"
          >Forgot Password?</router-link
        >
        <p class="login-register">
          Did you want to add another admin? <br />
          <router-link :to="{ name: 'Newadmin' }">Click here</router-link>
        </p>
      </form>
      <div v-if="$store.state.user">
        <h2>Hey fren! You've logged in.</h2>
        <p>
          Go to your main page
          <router-link :to="{ name: 'Home' }">here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  mounted() {
    console.log(db.collection("users"));
  },
  methods: {
    async signIn() {
      try {
        const firebaseAuth = await firebase.auth();
        await firebaseAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        this.error = false;
        this.errorMsg = "";
        window.location.reload();
      } catch (err) {
        this.error = true;
        this.errorMsg = err.message;
        console.log(err);
      }
    },
  },
};
</script>

<style lang='scss'>
.form-container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 40vw 60vw;
  place-items: center;

  .photo {
    grid-column: 1 / 2;
    overflow: hidden;
    img {
      object-position: 50% 50%;
      object-fit: cover;
      width: 40vw;
      height: 100vh;
    }
  }

  .form {
    grid-column: 2 / 3;
    padding: 2rem;
    text-align: center;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .input {
      display: block;
      margin: 1em 0;

      input {
        border: 2px solid var(--color-primary);
        padding: 0.5em;
        margin: 0 1em;
        border-radius: 0.5em;
      }
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    .photo {
      display: none;
    }

    .form {
      grid-column: 1 / 2;
    }
  }
}
</style>