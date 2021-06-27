<template>
  <div class="form-container">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="photo">
      <img src="../assets/img/flowers5.jpg" alt="" />
    </div>
    <div class="form">
      <form class="register">
        <h1>It's okay my fren</h1>
        <h2>Reset your password</h2>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <i class="fas fa-at"></i>
          </div>
        </div>
        <div class="input">
          <button class="button" @click.prevent="resetPassword">Reset</button>
        </div>
      </form>
      <p class="login-register">
        Go back to login <br />
        <router-link :to="{ name: 'Login' }">Login Here</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

export default {
  name: "Forgotpassword",
  data() {
    return {
      email: null,
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  components: {
    Modal,
    Loading,
  },
  methods: {
    resetPassword() {
      console.log(db);
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = "If your account exists, you'll get an email :)";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
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