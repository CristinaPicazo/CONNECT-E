<template>
  <GetPost />
</template>

<script>
import GetPost from "../components/getPost.vue";

export default {
  name: "PostDetailsView",
  components: { GetPost },
};
// import GetPosts from "../components/getPosts.vue";
</script>

<style lang="scss">
@use "../scss/mixins.scss";
.forms {
  @include mixins.forms;
}
</style>
