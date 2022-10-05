<template>
  <form
    enctype="multipart/form-data"
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
        name="file"
        type="file"
        class="form-control border-3 border-danger input-file"
        ref="file"
        accept="image/*"
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
import getUserDetails from "../helpers/getUserDetails";

export default {
  name: "CreatePostView",
  data() {
    return {
      title: "",
      body: "",
      file: "",
      filename: "",
      userId: getUserDetails().id,
    };
  },
  methods: {
    handleFile(event) {
      this.file = this.$refs.file.files[0];
      this.filename = this.file.name;
    },
    handleSubmit() {
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("body", this.body);
      if (this.file == "") {
        formData.append("file", this.file);
      } else {
        formData.append("file", this.file, this.filename);
      }
      formData.append("userId", this.userId);
      axios
        .post("/posts/newPost", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((submitResult) => {
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.log("error:", error);
          this.errorMessage = error.message;
        });
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
