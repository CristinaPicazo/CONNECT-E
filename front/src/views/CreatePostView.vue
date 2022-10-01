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
        @change="handleFile($event.target.files)"
      />{{ file.name }}
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
      userId: getUserDetails().id,
    };
  },
  // mounted() {
  //   console.log("user from getUser id", getUserDetails().id);
  //   console.log("user from getUser user", getUserDetails().user);
  //   console.log("user from getUser email", getUserDetails().email);
  //   let localStorageUser = JSON.parse(localStorage.getItem("userDetails"));
  //   this.userId = localStorageUser.id;
  //   this.user = localStorageUser.user;
  //   this.readBy.push(this.id);
  // },
  methods: {
    handleFile(fileList) {
      console.log("filesList:", fileList);
      this.file = fileList[0];
      console.log("this.file:", this.file);
      console.log("this.file.name:", this.file.name);

      // if (!fileList.length) return;

      // formData.append(fileList, fileList.name);
      // console.log("fileList.name:", fileList[0]);
      // console.log("fileList.name:", fileList[0].name);
      // console.log("formData:", formData);
      // return formData;

      // this.file = this.$refs.file.files[0];
      // console.log("this.file:", this.file);
    },
    handleSubmit() {
      const formData = new FormData();
      formData.append("body", this.body);
      formData.append("file", this.file, this.file.name);
      formData.append("userId", this.userId);
      formData.append("title", this.title);
      formData.append("user", this.user);
      formData.append("readBy", this.readBy);
      console.log("formData:", formData);
      axios
        .post("/posts/newPost", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });

      // axios
      //   .post("/posts/newPost", {
      //     user: this.user,
      //     title: this.title,
      //     body: this.body,
      //     file: this.file,
      //     userId: this.userId,
      //     readBy: this.readBy,
      //     headers: { "Content-Type": "multipart/form-data" },
      //   })
      //   .then((newPostResult) => {
      //     console.log("newPostResult:", newPostResult);
      //     this.$router.push("/posts");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     this.errorMessage = "Error";
      //   });

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
