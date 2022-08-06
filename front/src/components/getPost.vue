<template>
  <div
    data-post
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger text-break text-center text-danger"
  >
    <p v-if="isLoading">Loading...</p>
    <div class="form-group mb-3">
      <h2 class="display-1 fw-bold">{{ post.title }}</h2>
      <h6 class="card-subtitle mb-5 text-muted">by {{ post.user }}</h6>
      <p>{{ post.body }}</p>
      <source
        class="multimedia"
        src="{{ post.multimedia }}"
        type="multimedia"
      />
    </div>
  </div>
</template>

<script>
import { router } from "../router";

export default {
  name: "GetPost",
  data() {
    return {
      post: [],
      isLoading: false,
      userId: "",
    };
  },
  methods: {
    async getPost() {
      this.isLoading = true;
      await fetch("http://localhost:3002/posts/" + this.$route.params.id)
        .then((response) => response.json())
        .then((data) => {
          (this.post = data),
            (this.isLoading = false),
            this.post.read.push(this.userId);
        });
    },
  },
  mounted() {
    this.getPost();
    this.userId = window.localStorage.key(0);
  },
};
</script>

<style lang="scss">
@use "../scss/mixins.scss";
[data-post] {
  @include mixins.forms;
}
</style>
