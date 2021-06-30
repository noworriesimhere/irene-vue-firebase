<template>
  <div class="container">
    <div class="text-title">
      <input type="text" v-model="postTitle" />
    </div>
    <div class="text-body">
      <quill-editor
        :value="post.blogPost"
        :options="state.editorOption"
        @change="onEditorChange($event)"
      />
    </div>
    <button
      class="button"
      style="width: 100%; margin: 10px 0"
      @click="uploadPost"
    >
      Save Changes
    </button>
  </div>
</template>

<script>
import { quillEditor } from "vue3-quill";

// import firebase from "firebase/app";
// import "firebase/auth";
// import db from "../firebase/firebaseInit";

export default {
  name: "UpdatePost",
  props: ["post"],
  components: {
    quillEditor,
  },
  data() {
    return {
      postHTML: this.post.blogPost,
      postTitle: this.post.title,
      error: null,
      errorMsg: null,
    };
  },
  methods: {
    onEditorChange({ html }) {
      this.postHTML = html;
    },
    onTitleChange(e) {
      console.log(e);
    },
    //   uploadPost() {
    //     if (this.postHTML.length !== 0 && this.postTitle.length !== 0) {
    //       const storageRef =
    //       return;
    //     }
    //     alert("Please fill out both the title and content!")
    //   }
  },
  setup() {
    const state = {
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"],
          ],
        },
        // more options
      },
      disabled: false,
    };

    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 600px;
  width: 100%;

  .text-title {
    input {
      background: none;
      border: 1px grey solid;
      font-size: 20px;
      width: 100%;
      padding: 5px;
    }
  }
}
</style>