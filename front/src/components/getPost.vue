<template>
  <div
    data-post
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger text-break text-center text-danger"
  >
    <p v-if="isLoading">Loading...</p>
    <p v-if="errorMessage != ''">{{ errorMessage }}</p>
    <div class="form-group mb-3" v-show="!isLoading && errorMessage == ''">
      <h2 class="display-1 fw-bold">{{ post.p_title }}</h2>
      <h6 class="card-subtitle mb-5 text-muted">by {{ post.author }}</h6>
      <p>{{ post.p_body }}</p>
      <source class="multimedia" src="{{ post.p_file }}" type="multimedia" />
      {{ post.p_file }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import getUserDetails from "../helpers/getUserDetails";

export default {
  name: "GetPost",
  data() {
    return {
      post: [],
      isLoading: false,
      errorMessage: "",
      id: getUserDetails().id,
    };
  },
  methods: {
    getPost() {
      axios
        .get("/posts/" + this.$route.params.id)
        .then((response) => {
          this.post = response.data.queryResult.rows[0];
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          this.errorMessage = error.message;
        });
    },
  },
  mounted() {
    this.getPost();
    // this.sendUser();
  },
};
</script>

<style scoped lang="scss">
@use "../scss/mixins.scss";
[data-post] {
  @include mixins.forms;
}
</style>
