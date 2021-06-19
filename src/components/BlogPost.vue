<template>
  <div class="page-wrapper">
    <div class="photo" :style="cssProps">
      <img :src="require(`../assets/img/${post.photo}.jpg`)" alt="" />
    </div>
    <div class="text">
      <div>
        <h1 v-if="post.main">{{ post.title }}</h1>
        <h2 v-else>{{ post.title }}</h2>
        <p>{{ post.blogPost }}</p>
        <p>{{ offset }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: ["post", "offset"],
  computed: {
    cssProps() {
      return {
        "--offset": this.offset + "px",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100vh;
  display: grid;
  grid-template-columns: 50vw 50vw;
  scroll-snap-align: start;

  .photo {
    transform: translateY(var(--offset));
    img {
      width: 50vw;
      height: 100vh;
      object-position: 50% 50%;
      object-fit: cover;
    }
  }

  .text {
    display: grid;
    place-items: center;
    height: 100vh;
    div {
      padding: 7rem;
    }
  }
}
</style>