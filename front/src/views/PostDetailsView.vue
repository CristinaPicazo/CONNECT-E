<template>
  <div
    data-post
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger text-break text-center"
  >
    <p v-if="isLoading">Loading...</p>
    <p v-if="errorMessage != ''">{{ errorMessage }}</p>
    <div class="form-group mb-3" v-show="!isLoading && errorMessage == ''">
      <h2 class="display-1 fw-bold">{{ post.p_title }}</h2>
      <h6 class="card-subtitle mb-5 text-muted">by {{ post.author }}</h6>
      <p>{{ post.p_body }}</p>
      <img
        v-if="post.p_file"
        class="rounded mx-auto d-block col-12 col-md-10 col-lg-8"
        v-bind:src="post.p_file"
        alt="{{ post.p_title }}"
      />
    </div>
  </div>
</template>

<script>
import axiosHelper from "../helpers/axios.helper";
export default {
  name: "PostDetailsView",
  data() {
    return {
      post: [],
      isLoading: false,
      errorMessage: "",
    };
  },
  methods: {
    // Call the post with that id from the database
    getPost() {
      axiosHelper
        .get("/posts/" + this.$route.params.id)
        .then((response) => {
          this.post = response.data.queryResult.rows[0];
          // Remove the loading message
          this.isLoading = false;
        })
        .catch((error) => {
          // Remove the loading message ans set the error message
          this.isLoading = false;
          this.errorMessage = error.message;
        });
    },
  },
  mounted() {
    this.getPost();
  },
};
</script>
