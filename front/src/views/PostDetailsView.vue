<template>
<div>postdetailsview</div>
  <!-- <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
  <h3>{{ post.title }}</h3>
  <p>{{ post.body }}</p>
  <p>{{ post.author }}</p>
  </div> -->
</template>

<script>
import getPost from '../composables/getPost'
export default {
  props: ['id'],
    setup(props){
      console.log('props:', props)
        const {post, error, load} = getPost(props.id)
      console.log('post:', post)

        load()

        return{ post, error}
    }
}
</script>

<style lang="scss">
 @use "../scss/mixins.scss";
  .forms{
    @include mixins.forms;
  }

</style>