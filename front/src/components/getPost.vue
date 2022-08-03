<template>
  <div
    data-post
    class="p-2 bg-white rounded-3 border border-danger text-danger text-center text-wrap"
  >
    <!-- <div class="card-body mw-40"> -->
    <h2 class="display-1 fw-bold mw-40">{{ post.title }}</h2>
    <p v-if="isLoading">Loading...</p>
    <!-- <div class="cards"> -->
    <div class="posts p-5 individual-cards">
      <h6 class="card-subtitle mb-2 text-muted">by {{ post.user }}</h6>
      <p class="text-justify text-break">{{ post.body }}</p>
      <source
        class="multimedia"
        src="{{ post.multimedia }}"
        type="multimedia"
      />
    </div>
    <!-- </div> -->
    <!-- </div> -->
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
    };
  },
  methods: {
    getPost() {
      this.isLoading = true;
      fetch("http://localhost:3002/posts/" + this.$route.params.id)
        .then((response) => response.json())
        .then((data) => {
          (this.post = data), (this.isLoading = false);
        });
    },
  },
  mounted() {
    this.getPost();
    let id = window.localStorage.key(0);
  },
};
</script>

<style lang="scss">
@use "../scss/mixins.scss";
[data-post] {
  margin: 10rem 5rem !important;
  @include mixins.forms;
}
</style>
