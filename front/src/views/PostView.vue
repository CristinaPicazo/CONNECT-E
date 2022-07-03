<template>
<div class="post">
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

<style>

</style>