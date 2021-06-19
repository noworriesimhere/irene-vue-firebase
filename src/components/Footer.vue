<template>
  <footer>
    <section>
      <small>Uptown Blooms Copyright 2021</small>
    </section>
    <section>
      <small>Developed by <a href="https://alantran.tech">Alan Tran</a></small>
    </section>
    <section>
      <a href="#">
        <i class="fab fa-facebook-square" />
      </a>
      <a href="#">
        <i class="fab fa-instagram" />
      </a>
    </section>
  </footer>
</template>

<script>
export default {
  name: "footer-vue",
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  right: 0;
  height: 100vh;
  padding: 5em 0.25em 0 0.25em;
  background-color: var(--color-background);
  writing-mode: vertical-rl;
  text-orientation: mixed;

  section {
    text-align: center;
    padding: 2em 0;
  }

  i {
    padding: 1em 0;
    color: var(--color-primary);
  }

  /* @media (max-width: 850px) {
    position: absolute;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  } */
}
</style>