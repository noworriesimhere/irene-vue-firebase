<template>
  <div class="page-wrapper" ref="photo">
    <div class="photo" :style="scrollOffset">
      <img :src="require(`../assets/img/${post.photo}.jpg`)" alt="" />
    </div>
    <div class="text">
      <div v-if="!editMode">
        <h1 v-if="post.main">{{ post.title }}</h1>
        <h2 v-else>{{ post.title }}</h2>
        <p>{{ post.blogPost }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: ["post", "offset", "offsetFactor"],
  components: {},
  data() {
    return {
      mountedOffset: 0,
      editMode: false,
    };
  },
  methods: {
    toggleEdit() {
      this.editMode = !this.editMode;
    },
  },
  computed: {
    editContent() {
      return this.$store.state.editContent;
    },
    scrollOffset() {
      //get the new offset position from initial offsetted location
      return {
        "--offset-initial": this.mountedOffset + this.offset + "px",
      };
    },
  },
  mounted() {
    //don't offset the first picture
    if (this.offsetFactor === 1) {
      return;
    }

    if (window.innerWidth > 420) {
      //the initiral offset for each photo
      this.mountedOffset =
        -this.$parent.$refs.home.clientHeight * this.offsetFactor;
      //readjust the offset if window size changes
      window.addEventListener("resize", () => {
        this.mountedOffset =
          -this.$parent.$refs.home.clientHeight * this.offsetFactor;
      });
    } else {
      //the initiral offset for each photo
      this.mountedOffset =
        -this.$parent.$refs.home.clientWidth * this.offsetFactor;
      //readjust the offset if window size changes
      window.addEventListener("resize", () => {
        this.mountedOffset =
          -this.$parent.$refs.home.clientWidth * this.offsetFactor;
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.page-wrapper {
  height: 100vh;
  display: grid;
  scroll-snap-align: start;
  grid-template-columns: 50vw 50vw;

  .photo {
    transform: translate3d(0, var(--offset-initial), 0);
    img {
      width: 50vw;
      height: 100vh;
      object-position: 50% 50%;
      object-fit: cover;
    }
  }

  .text {
    position: relative;
    display: grid;
    place-items: center;
    height: 100vh;
    div {
      padding: 7rem;
    }
  }

  @media (max-width: 510px) {
    height: 100%;
    height: -webkit-fill-available;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 40%;

    .photo {
      transform: translate3d(var(--offset-initial), 0, 0);
      grid-row: 2/3;
      img {
        width: 100vw;
        height: 100%;
      }
    }

    .text {
      grid-row: 1/2;
      height: 100%;
      div {
        padding: 2rem;
      }
    }
  }

  .edit-icons {
    position: absolute;
    bottom: 0;

    i {
      margin: 1em;
      cursor: pointer;
    }
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 2s ease;
}
</style>