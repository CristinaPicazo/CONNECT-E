<template> 
<div class="post forms p-5">
  <h1>Main Page</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
    <PostList :posts="posts"/>
    </div>
    <div v-else>Loading...</div>
    </div>

</template>

<script>
import PostList from '../components/PostList.vue'
// import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'

export default {
    name: 'Post',
    components: { PostList },
    setup(){
        const {posts, error, load} = getPosts()
        load()
        return {posts, error}
    }
    }
</script>

<style lang="scss">
 @use "../scss/mixins.scss";
  .forms{
    @include mixins.forms;
  }

</style>