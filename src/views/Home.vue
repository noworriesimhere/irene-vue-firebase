<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      mainPage: {
        title: "Natural Flowers",
        blogPost:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reiciendis.",
        blogCoverPhoto: "flowers1",
      },
      secondPage: {
        title: "My Story",
        blogPost:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reiciendis.",
        blogCoverPhoto: "flowers2",
      },
      thirdPage: {
        title: "Past Work",
        blogPost:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reiciendis.",
        blogCoverPhoto: "flowers3",
      },
      fourthPage: {
        title: "Contact Me",
        blogPost:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, reiciendis.",
        blogCoverPhoto: "flowers4",
      },
    };
  },
};
</script>
