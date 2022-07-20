<template>
  <div class="post-list">
    <div class="post forms p-5 m-5" v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        return {
            posts: props.posts
        };
    }
}
</script>

<style lang="scss">
 @use "../scss/mixins.scss";
 .post-list{
  .forms{
    @include mixins.forms;
  }
}

</style>