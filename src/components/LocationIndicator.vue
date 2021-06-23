<template>
  <div class="container">
    <div
      class="dot"
      v-for="(item, index) in items"
      :key="index"
      :class="Math.round(offset / totalSize) === index ? 'current' : 'others'"
    ></div>
  </div>
</template>

<script>
export default {
  name: "locationMenu",
  props: ["items", "offset"],
  data() {
    return {
      //used to figure out which is active page
      totalSize:
        window.innerWidth > 510 ? window.innerHeight : window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", ({ target }) => {
      this.totalSize =
        target.innerWidth > 510 ? target.innerHeight : target.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  z-index: 101;
  display: flex;
  top: 40%;
  bottom: 40%;
  max-height: 20%;
  left: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dot {
    height: 0.5em;
    width: 0.5em;
    margin: 0.5em;
    border-radius: 50%;
    transition: all 0.5s ease;
  }
  .current {
    background-color: var(--color-tertiary);
    height: 0.75em;
    width: 0.75em;
  }
  .others {
    background-color: var(--color-accent);
  }

  @media (max-width: 510px) {
    flex-direction: row;
    top: 55%;
    left: 30%;
    right: 30%;
    max-width: 40%;
    margin: 0;
  }
}
</style>