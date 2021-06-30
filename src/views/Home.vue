<template>
  <div ref="home" class="home">
    <BlogPost
      v-for="(post, index) in cards"
      :key="index"
      :post="post"
      :offset="offset"
      :offsetFactor="index + index"
    />
    <LocationIndicator :items="cards" :offset="offset / 2" />
  </div>
</template>


<script>
import BlogPost from "../components/BlogPost.vue";
import LocationIndicator from "../components/LocationIndicator.vue";

export default {
  name: "Home",
  components: { BlogPost, LocationIndicator },
  data() {
    return {
      offset: null,
    };
  },
  computed: {
    cards() {
      return this.$store.state.homeCards;
    },
  },
  mounted() {
    if (window.innerWidth > 510) {
      this.$refs.home.addEventListener("scroll", (e) => {
        let topOffset = e.target.scrollTop;
        this.offset = 2 * topOffset;
      });
    } else {
      let timeout;
      this.$refs.home.addEventListener(
        "scroll",
        (e) => {
          // If there's a timer, cancel it
          if (timeout) {
            window.cancelAnimationFrame(timeout);
            console.log(timeout);
          }

          // Setup the new requestAnimationFrame()
          timeout = window.requestAnimationFrame(() => {
            let leftOffset = e.target.scrollLeft;
            this.offset = 2 * leftOffset;

            // Run our scroll functions
            console.log("debounced");
          });
        },
        false
      );
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