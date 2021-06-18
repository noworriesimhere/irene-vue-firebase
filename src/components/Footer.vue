<template>
  <footer>
    <section>
      <a href="#">
        <i class="fab fa-facebook-square" />
      </a>
      <a href="#">
        <i class="fab fa-instagram" />
      </a>
    </section>
    <section>
      <small>Uptown Blooms Copyright 2021</small>
    </section>
    <section>
      <small>Developed by <a href="https://alantran.tech">Alan Tran</a></small>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.25em;

  section {
    text-align: center;
  }

  i {
    padding: 0 0.5em;
  }

  @media (max-width: 850px) {
    position: absolute;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
}
</style>