<template>
  <GetPost />
</template>

<script>
import GetPost from "../components/getPost.vue";

export default {
  name: "PostDetailsView",
  components: { GetPost },
};
</script>

<style scoped lang="scss">
@use "../scss/mixins.scss";
.forms {
  @include mixins.forms;
}
</style>
