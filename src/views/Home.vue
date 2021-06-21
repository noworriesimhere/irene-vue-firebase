<template>
  <div ref="home" class="home">
    <BlogPost
      v-for="(post, index) in pages"
      :key="index"
      :post="post"
      :offset="offset"
      :offsetFactor="index + index"
    />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";

export default {
  name: "Home",
  components: { BlogPost },
  data() {
    return {
      pages: [
        {
          title: "Flowers and things",
          blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          photo: "flowers1",
          main: true,
        },
        {
          title: "Lorem, ipsum.",
          blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          photo: "flowers2",
        },
        {
          title: "Lorem, ipsum dolor.",
          blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          photo: "flowers3",
        },
        {
          title: "Lorem ipsum dolor sit.",
          blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          photo: "flowers4",
        },
      ],
      offset: null,
    };
  },
  mounted() {
    this.$refs.home.addEventListener("scroll", (e) => {
      if (window.innerWidth > 420) {
        let topOffset = e.target.children[0].getBoundingClientRect().top;
        this.offset = -2 * topOffset;
      } else {
        let leftOffset = e.target.children[0].getBoundingClientRect().left;
        this.offset = -2 * leftOffset;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.home {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
  position: fixed;

  @media (max-width: 420px) {
    scroll-snap-type: x mandatory;
    width: 100vw;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
  }
}
</style>