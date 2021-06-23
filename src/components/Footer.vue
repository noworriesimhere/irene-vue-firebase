<template>
  <footer :style="showMe ? 'display: unset' : ''">
    <section>
      <small>Something Blooms Copyright 2021</small>
    </section>
    <section>
      <a href="#">
        <i class="fab fa-facebook-square" />
      </a>
      <a href="#">
        <i class="fab fa-instagram" />
      </a>
    </section>
    <section>
      <small>Developed by <a href="https://alantran.tech">Alan Tran</a></small>
    </section>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",
  props: ["showMe"],
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50vw;

  section {
    text-align: center;
    padding: 0.5em;
  }

  i {
    padding: 0 1em;
    color: var(--color-primary);
  }

  @media (max-width: 850px) {
    right: unset;
    left: 0;
    z-index: 100;
    background-color: unset;
    display: none;
  }

  @media (max-width: 510px) {
    display: none;
    width: 100%;

    section {
      padding: 0.1em;
    }
  }
}
</style>