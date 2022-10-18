<template>
  <div
    data-posts
    class="mt-5 m-md-5 p-md-5 bg-white rounded-3 border border-danger text-center"
  >
    <h2 class="display-1 fw-bold">Posts</h2>
    <p v-if="!isPostListEmpty && !isLoading" class="text-center text-wrap">
      You have {{ postsNotRead.length }} post to read
    </p>
    <p v-if="!isPostListEmpty && !isLoading" class="text-center text-wrap">
      {{ postsRead.length }} has been already reading
    </p>
    <div
      class="flex-column d-flex flex-md-row flex-md-wrap w-30 justify-content-around"
    >
      <p v-if="isLoading">Loading...</p>
      <p v-if="isPostListEmpty">There isn't any post</p>
      <p v-if="errorMessage != ''">{{ errorMessage }}</p>

      <div
        v-show="!isLoading && !isPostListEmpty && errorMessage == ''"
        class="w-sm-30 p-1 col col-md-4"
        v-for="post in postsNotRead"
        v-bind:key="post.p_id"
      >
        <router-link
          :to="`/posts/${post.p_id}`"
          class="text-decoration-none"
          @click="isPostRead(post.p_id, post.isread)"
        >
          <div
            class="h-100 p-5 rounded-3 border border-danger"
            :class="{
              'bg-danger text-white': post.isread == 0,
              'bg-white  ': post.isread == 1,
            }"
          >
            <h5 class="card-title">
              <u>{{ post.p_title }}</u>
            </h5>
            <p class="text-truncate">
              {{ post.p_body }}
            </p>
          </div>
        </router-link>
      </div>

      <div
        v-show="!isLoading && !isPostListEmpty && errorMessage == ''"
        class="w-sm-30 p-1 col col-md-4"
        v-for="post in postsRead"
        v-bind:key="post.p_id"
      >
        <router-link
          :to="`/posts/${post.p_id}`"
          class="text-decoration-none"
          @click="isPostRead(post.p_id, post.isread)"
        >
          <div
            class="h-100 p-5 rounded-3 border border-danger"
            :class="{
              'bg-danger text-white': post.isread == 0,
              'bg-white  ': post.isread == 1,
            }"
          >
            <h5 class="card-title">
              <u>{{ post.p_title }}</u>
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
import getUserDetails from "../helpers/getUserDetails";
import axiosHelper from "../helpers/axios.helper";

export default {
  name: "PostsView",
  data() {
    return {
      userId: getUserDetails().id,
      postsRead: [],
      postsNotRead: [],
      isLoading: true,
      isPostListEmpty: false,
      errorMessage: "",
    };
  },
  methods: {
    getPosts() {
      axiosHelper
        // Call all posts from the database
        .get("/posts")
        .then((response) => {
          // Remove the loading message
          this.isLoading = false;
          if (response.data.queryResult.rows.length === 0)
            // Check if there is any post in the database, if not show a message
            return (this.isPostListEmpty = true);
          // Check if the post is read or not to show it at the beginning of the list or the end
          this.organisePosts(response.data.queryResult.rows);
        })
        .catch((error) => {
          // Remove the loading message ans set the error message
          this.isLoading = false;
          this.errorMessage = error.message;
        });
    },
    // Onclick send a request to the server to update the post as read if it's not the author or if user hasn't read it
    isPostRead(postId, isread) {
      // 1  is author or had read it
      if (isread === 1) return;
      axiosHelper
        .post("/posts", {
          fk_user_id: getUserDetails().id,
          fk_post_id: postId,
        })
        .catch((error) => {
          console.log(error);
          this.errorMessage = "Error";
        });
    },
    // Organise the posts in two lists, one for the read posts and one for the not read posts
    organisePosts(posts) {
      posts.forEach((post) => {
        if (post.isread == 0) {
          this.postsNotRead.push(post);
        }
        if (post.isread == 1) {
          this.postsRead.push(post);
        }
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
