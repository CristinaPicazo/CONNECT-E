<template>
  <GetPosts />
</template>

<script>
import { ref, onMounted, computed } from "vue";
//import posts store
// import { usePostsStore } from "../store/posts.store";
import { router } from "../router";
// import PostsStore from "../store/posts.store";
import GetPosts from "../composables/getPosts.vue";

export default {
  name: "PostsView",
  components: { GetPosts },
};
</script>

<style lang="scss">
@use "../scss/mixins.scss";
.posts {
  @include mixins.posts;
}
</style>
