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
        <router-link
          :to="`/posts/${post.p_id}`"
          class="text-decoration-none"
          @click="isRead(post.p_id, post.isread)"
        >
          <div
            class="h-100 p-5 rounded-3 border border-danger"
            :class="{
              'bg-danger text-white': post.isread == 0,
              'bg-white text-danger': post.isread == 1,
            }"
          >
            <h5 class="card-title">
              <u
                >{{ post.p_title }} - is read {{ post.isread }} userid
                {{ userId }} postuid {{ post.fk_u_id }}</u
              >
            </h5>
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
import getUserDetails from "../helpers/getUserDetails";

export default {
  name: "GetPosts",
  data() {
    return {
      userId: getUserDetails().id,
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
    isRead(postId, isread) {
      console.log('isread:', isread)
      console.log("postId:", postId);
      console.log("user this.id:", getUserDetails().id);
      if (isread == 1) return;
      axios
        .post("/posts/", {
          fk_user_id: getUserDetails().id,
          fk_post_id: postId,
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Error";
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
}
</style>
