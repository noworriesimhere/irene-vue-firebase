<template>
  <div ref="home" class="home">
    <BlogPost
      v-for="(post, index) in pages"
      :key="index"
      :post="post"
      :offset="offset"
      :offsetFactor="index + index"
    />
    <LocationIndicator :items="pages" :offset="offset / 2" />
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost.vue";
import LocationIndicator from "../components/LocationIndicator.vue";

export default {
  name: "Contact",
  components: { BlogPost, LocationIndicator },
  data() {
    return {
      pages: [
        {
          title: "Please reach out to me!",
          blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          photo: "flowers1",
        },
        {
          title: "More about me",
          blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          photo: "flowers2",
        },
        {
          title: "Last page",
          blogPost: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          photo: "flowers4",
        },
      ],
      offset: null,
    };
  },
  mounted() {
    if (window.innerWidth > 510) {
      this.$refs.home.addEventListener("scroll", (e) => {
        let topOffset = e.target.scrollTop;
        this.offset = 2 * topOffset;
      });
    } else {
      this.$refs.home.addEventListener("scroll", (e) => {
        let leftOffset = e.target.scrollLeft;
        this.offset = 2 * leftOffset;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100%;
  position: fixed;
  display: grid;

  @media (max-width: 510px) {
    scroll-snap-type: x mandatory;
    width: 100vw;
    height: 100%;
    height: -webkit-fill-available;
    overflow-y: hidden;
    overflow-x: scroll;
    display: flex;
  }
}
</style>