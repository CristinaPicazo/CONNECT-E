<template>
  <div
    class="forms posts p-5 bg-white rounded-3 border border-danger text-danger text-center"
  >
    <h2 class="display-1 fw-bold">Posts</h2>
    <div class="card-body">
      <p v-if="isLoading">Loading...</p>
      <div class="cards" v-for="post in posts" :key="post.id">
        <GetPost :post="post.id" />
        <a @click="goToPostDetail(post.id)">
          <div class="p-5 mb-5 rounded-3 border border-danger">
            <h5 class="card-title">
              <u>{{ post.title }}</u>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ post.user }}</h6>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "../router";

export default {
  name: "GetPosts",
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    getPosts() {
      this.isLoading = true;
      fetch("http://localhost:3002/posts")
        .then((response) => response.json())
        .then((data) => {
          (this.posts = data), (this.isLoading = false);
        });
    },
    goToPostDetail(id) {
      this.$router.push("/posts/" + id);
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style></style>
