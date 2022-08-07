<template>
  <div
    data-posts
    class="mt-5 m-md-5 p-md-5 bg-white rounded-3 border border-danger text-danger text-center"
  >
    <h2 class="display-1 fw-bold">Posts</h2>
    <div
      class="flex-column d-flex flex-md-row flex-md-wrap w-30 justify-content-around"
    >
      <p v-if="isLoading">Loading...</p>
      <p v-if="isPostListEmpty">There isn't any post</p>
      <p v-if="errorMessage != ''">{{ errorMessage }}</p>
      <div
        class="w-sm-30 p-1 col col-md-4"
        v-for="post in posts"
        :key="post.id"
      >
        <!-- <a class="text-decoration-none" :href="`http://localhost:3002/posts/${post.id}`"> -->
        <router-link
          active-class="active-link"
          exact-active-class="exact-active-link"
          :to="`/posts/${post.id}`"
        >
          <a href="`/posts/${post.id}`" class="active-link exact-active-link">
            <div
              class="h-100 p-5 rounded-3 border border-danger bg-danger text-white"
            >
              <h5 class="card-title">
                <u>{{ post.title }}</u>
              </h5>
              <h6 class="card-subtitle mb-2">by {{ post.user }}</h6>
              <p class="text-truncate">
                {{ post.body }}
              </p>
            </div>
          </a>
        </router-link>
        <!-- </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { getCurrentUser } from "../store/user";

export default {
  name: "GetPosts",
  data() {
    return {
      posts: [],
      isLoading: true,
      user: null,
      errorMessage: "",
    };
  },
  methods: {
    getPosts() {
      fetch("http://localhost:3002/posts")
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;
          this.isLoading = false;
        })
        .catch((error) => {
          this.isLoading = false;
          return (this.errorMessage = error);
        });
    },
  },
  computed: {
    isPostListEmpty() {
      return this.posts.length == 0;
    },
  },
  mounted() {
    //backend
    this.user = getCurrentUser();
    this.getPosts();
  },
};
</script>

<style scoped lang="scss">
@use "../scss/mixins.scss";
[data-posts] {
  @include mixins.forms;
  // .active-link {
  //   color: blue;
  //   background-color: purple;
  // }
}
</style>
