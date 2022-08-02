<template>
  <GetPosts />
</template>

<script>
import { router } from "../router";
import GetPosts from "../composables/getPosts.vue";

export default {
  name: "PostsView",
  components: { GetPosts },
};
</script>

<style lang="scss">
@use "../scss/mixins.scss";
[data-container] {
  @include mixins.forms;
}
</style>
