<template>
  <div class="form-container">
    <div class="photo">
      <img src="../assets/img/flowers5.jpg" alt="" />
    </div>
    <div class="form">
      <form class="register">
        <h1>Hey Irene (Or trusted friend)!</h1>
        <h2>Make your login here:</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Name" v-model="name" />
            <i class="fas fa-at"></i>
          </div>
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <i class="fas fa-at"></i>
          </div>
          <div class="input">
            <input type="password" placeholder="Password" v-model="password" />
            <i class="fas fa-key"></i>
          </div>
          <div v-show="error" class="error">{{ errorMsg }}</div>
        </div>
        <div class="input">
          <button class="button" @click.prevent="register">Create Login</button>
        </div>
      </form>
      <p class="login-register">
        Already have a login? <br />
        <router-link :to="{ name: 'Login' }">Login Here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  mounted() {
    console.log(firebase.auth());
  },
  methods: {
    async register() {
      if (this.email !== "" && this.name !== "" && this.password !== "") {
        this.error = false;
        this.errorMsg = "";
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        );
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
        await dataBase.set({
          name: this.name,
          email: this.email,
        });
        this.$router.push({ name: "Home" });
        return;
      }
      this.error = true;
      this.errorMsg = "Please fill out all fields";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
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