<template>
  <div class="posts card p-5">
    <div class="card-body">
      <h2><u>Post</u></h2>
      <p v-if="isLoading">Loading...</p>
      <div class="cards">
        <div class="posts card-body p-5 individual-cards">
          <h5 class="card-title">
            <u>{{ post.title }}</u>
          </h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ post.user }}</h6>
          <p class="card-text">{{ post.body }}</p>
          <source class="multimedia" src="{{ post.multimedia }}" type="multimedia"/>
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
