<template>
  <div class="posts card p-5">
    <div class="card-body">
      <h2><u>Posts</u></h2>
      <p v-if="isLoading">Loading...</p>
      <div class="cards" v-for="post in posts" :key="post.id">
        <GetPost :post="post.id" />
        <a @click="goToPostDetail(post.id)">
          <div class="posts card-body p-5 individual-cards">
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
