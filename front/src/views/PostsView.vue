<template>
  <GetPosts />
</template>

<script>
import { router } from "../router";
import GetPosts from "../components/getPosts.vue";

export default {
  name: "PostsView",
  components: { GetPosts },
};
</script>

<style scoped lang="scss"></style>
