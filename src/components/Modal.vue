<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalMessage"],
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 102;
  top: 0;
  background-color: hsla(37, 79%, 75%, 0.8);

  .modal-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 1em;
    max-width: 300px;
    width: 30vw;
    padding: 40px 30px;
    background-color: var(--color-background);

    p {
      text-align: center;
    }

    button {
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
  }
}
</style>