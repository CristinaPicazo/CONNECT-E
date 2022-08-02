<template>
  <form
    class="forms p-5 bg-white mb-5 rounded-3 border border-danger"
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

export default {
  name: "CreatePostView",
  setup() {
    let id = Math.floor(Math.random() * 10) + new Date().getTime();
    let user = "";
    let title = "";
    let body = "";
    let file = "";
    let read = "";
    return { id, user, title, body, file, read };
  },
  mounted() {
    let id = window.localStorage.key(0);
    let localStorageUser = JSON.parse(localStorage.getItem(id));
    this.user = localStorageUser.user;
  },
  methods: {
    handleFile() {
      this.file = this.$refs.file.files[0];
      this.file = file;
    },
    handleSubmit() {
      const newPost = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: this.id,
          user: this.user,
          title: this.title,
          body: this.body,
          file: this.file,
        }),
      };

      fetch("http://localhost:3002/posts", newPost)
        .then((res) => res.json())
        .then(() => {
          return this.$router.push("/posts");
        });
    },
  },
};
</script>
<style lang="scss">
@use "../scss/mixins.scss";
.forms {
  @include mixins.forms;
  .buttons {
    @include mixins.buttons;
    margin: 10px auto;
  }
}
</style>
