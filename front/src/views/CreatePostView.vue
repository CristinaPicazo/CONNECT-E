<template>
  <form
    enctype="multipart/form-data"
    data-new-post
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-center display-1 fw-bold">New Post</h2>

    <div class="form-group mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        id="title"
        type="text"
        class="form-control border-3 border-danger"
        v-model="title"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="body" class="form-label">Body</label>
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
      <label for="file" class="form-label">Multimedia</label>
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
    <div class="form-group text-center">
      <button
        type="submit"
        class="btn buttons bg-white rounded rounded-pill col-6 col-md-4 col-lg-2"
      >
        Submit
      </button>
    </div>
  </form>
  <div v-if="this.message" class="alert">
    {{ this.message }}
  </div>
</template>

<script>
import { ref } from "vue";
import axiosHelper from "../helpers/axios.helper";
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
      message: "",
    };
  },
  methods: {
    handleFile() {
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
      axiosHelper
        .post("/posts/newPost", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          this.$router.push("/posts");
        })
        .catch((error) => {
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
