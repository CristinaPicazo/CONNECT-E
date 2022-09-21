<template>
  <div
    data-posts
    class="mt-5 m-md-5 p-md-5 bg-white rounded-3 border border-danger text-danger text-center"
  >
    <h2 class="display-1 fw-bold">Posts</h2>
    {{ this.user }}
    <div
      class="flex-column d-flex flex-md-row flex-md-wrap w-30 justify-content-around"
    >
      <p v-if="isLoading">Loading...</p>
      <p v-if="isPostListEmpty">There isn't any post</p>
      <p v-if="errorMessage != ''">{{ errorMessage }}</p>
      <div
        v-show="!isLoading && !isPostListEmpty && errorMessage == ''"
        class="w-sm-30 p-1 col col-md-4"
        v-for="post in posts"
        v-bind:key="post.p_id"
      >
        <router-link :to="`/posts/${post.p_id}`">
          <div
            class="h-100 p-5 rounded-3 border border-danger bg-danger text-white"
          >
            <h5 class="card-title">
              <u>{{ post.p_title }}</u>
            </h5>
            <h6 class="card-subtitle mb-2">by {{ post.fk_user }}</h6>
            <p class="text-truncate">
              {{ post.p_body }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetPosts",
  data() {
    return {
      posts: [],
      isLoading: true,
      isPostListEmpty: false,
      errorMessage: "",
      user: "",
    };
  },
  methods: {
    getPosts() {
      axios
        .get("/posts")
        .then((response) => {
          this.posts = response.data.queryResult.rows;
          this.isLoading = false;
          if (response.data.queryResult.rows.length === 0)
            return (this.isPostListEmpty = true);
        })
        .catch((error) => {
          this.isLoading = false;
          this.errorMessage = error.message;
        });
    },
  },

  mounted() {
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
  // a:visited {
  //   background-color: aquamarine !important;
  // }
  // .active-link:visited {
  //   color: blue;
  //   background-color: purple !important;
  // }
  // .exact-active-link:visited {
  //   color: pink;
  //   background-color: orange !important;
  // }
  w-sm-30 router-link {
    border: 3px solid pink !important;
    color: pink !important;
    background-color: orange !important;
    :visited {
      color: blue;
      background-color: purple !important;
    }
  }
}
</style>
