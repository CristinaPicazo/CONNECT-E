<template>
  <div class="posts card p-5">
    <div class="card-body">
      <h2><u>Posts</u></h2>
  <div class="cards" @click="goToPostDetail" v-for='post in posts' :key='post.id'>
    <div class="posts card-body p-5 individual-cards">
  <h5 class="card-title"><u>{{post.title}}</u></h5>
  <h6 class="card-subtitle mb-2 text-muted">{{post.user}}</h6>
  <p class="card-text">{{post.body}}</p>
    </div>
  </div>
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
//import users store
import { usePostsStore } from "../store/posts.store";
// declare store variable
const store = usePostsStore();

const posts = computed(() => {
  return store.posts
})

onMounted(() => {
  store.fetchPosts();
}),

function  goToPostDetail() {
    this.$router.push('/PostDetails');
  }
</script>

<style lang="scss">
 @use "../scss/mixins.scss";
  .posts{
    @include mixins.posts;
  }

</style>