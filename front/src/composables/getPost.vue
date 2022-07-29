<template>
  <div class="forms posts p-5 bg-white rounded-3 border border-danger text-danger text-center">
    <div class="card-body">
      <h2 class="display-1 fw-bold">{{ post.title }}</h2>
      <p v-if="isLoading">Loading...</p>
      <div class="cards">
        <div class="posts card-body p-5 individual-cards">
          <h6 class="card-subtitle mb-2 text-muted">by {{ post.user }}</h6>
          <p class="card-text">{{ post.body }}</p>
          <source
            class="multimedia"
            src="{{ post.multimedia }}"
            type="multimedia"
          />
        </div>
      </div>
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
  },
};
</script>

<style></style>
