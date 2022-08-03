<template>
  <div
    data-posts
    class="mt-5 m-md-5 p-md-5 bg-white rounded-3 border border-danger text-danger text-center"
  >
    <h2 class="display-1 fw-bold">Posts</h2>
    <div
      class="flex-column d-flex flex-md-row flex-md-wrap w-30 justify-content-around"
    >
      <p v-if="anyPost">There isn't any post</p>
      <p v-if="isLoading">Loading...</p>
      <div class="w-sm-30 p-1" v-for="post in posts" :key="post.id">
        <GetPost :post="post.id" />
        <a @click="goToPostDetail(post.id)">
          <div class="posts h-100 p-5 rounded-3 border border-danger">
            <h5 class="card-title">
              <u>{{ post.title }}</u>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ post.user }}</h6>
            <p>{{ snippet(post.body) }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from "../router";
import { computed } from "vue";
export default {
  name: "GetPosts",
  data() {
    return {
      posts: [],
      isLoading: false,
      // anyPost: false,
    };
  },
  methods: {
    getPosts() {
      this.isLoading = true;
      fetch("http://localhost:3002/posts")
        .then((response) => response.json())
        .then((data) => {
          // console.log('data:', data)
          // if (!data.length) {
          //   this.anyPost = true;
          // } else {
          //   this.anyPost = false;
          this.posts = data;
          this.isLoading = false;
          this.currentId = "1659105068440";
          // }
        });
    },
    goToPostDetail(id) {
      this.$router.push("/posts/" + id);
    },
    snippet(body) {
      return body.substring(0, 20) + "...";
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style lang="scss">
@use "../scss/mixins.scss";
[data-posts] {
  // margin: 10rem 5rem !important;
  @include mixins.forms;
}
</style>
