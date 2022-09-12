<template>
  <form
    data-new-post
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-danger text-center display-1 fw-bold">New Post</h2>

    <div class="form-group mb-3">
      <label for="title" class="text-danger form-label">Title</label>
      <input
        id="title"
        type="text"
        class="form-control border-3 border-danger"
        v-model="title"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="body" class="text-danger form-label">Body</label>
      <textarea
        id="body"
        type="body"
        class="form-control border-3 border-danger"
        rows="4"
        v-model="body"
        spellcheck="true"
        required
      ></textarea>
    </div>
    <div class="form-group mb-3">
      <label for="file" class="text-danger form-label">Multimedia</label>
      <input
        id="file"
        type="file"
        class="form-control border-3 border-danger"
        ref="file"
        @change="handleFile"
      />
    </div>
    <div class="form-group align-self-center">
      <button
        type="submit"
        class="text-danger btn buttons bg-white rounded rounded-pill col-12"
      >
        Submit
      </button>
    </div>
  </form>
  <div v-if="message" class="alert">
    {{ message }}
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "CreatePostView",
  data() {
    return {
      id: Math.floor(Math.random() * 1) + new Date().getTime(),
      body: "",
      file: "",
      userId: "",
      title: "",
      user: "",
      readBy: [],
    };
  },
  mounted() {
    this.userId = window.localStorage.key(0);
    let localStorageUser = JSON.parse(localStorage.getItem(this.userId));
    this.user = localStorageUser.user;
    this.readBy = this.userId;
  },
  methods: {
    // handleFile() {
    //   this.file = this.$refs.file.files[0];
    //   this.file = file;
    // },
    handleSubmit() {
      axios
        .post("/posts/newPost", {
          id: this.id,
          user: this.user,
          title: this.title,
          body: this.body,
          file: this.file,
          userId: this.userId,
          readBy: this.readBy,
        })
        .then((newPostResult) => {
          console.log("newPostResult:", newPostResult);
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Error";
        });
      // const newPost = {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: this.id,
      //     user: this.user,
      //     title: this.title,
      //     body: this.body,
      //     file: this.file,
      //   }),
      // };

      // fetch("http://localhost:3002/posts", newPost)
      //   .then((res) => res.json())
      //   .then(() => {
      //     return this.$router.push("/posts");
      //   });
    },
  },
};
</script>
<style scoped lang="scss">
@use "../scss/mixins.scss";
[data-new-post] {
  @include mixins.forms;
  button {
    @include mixins.buttons;
    margin: 10px auto;
  }
}
</style>
