<template>
<div>
  <nav class="navBar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'Signup'}">Signup</router-link>
    <router-link :to="{name: 'Login'}">Login</router-link>
    <router-link :to="{name: 'Post'}">Post</router-link>
    <router-link :to="{name: 'CreatePost'}">New</router-link>
    <router-link :to="{name: 'Profile'}">Profile</router-link>
  </nav>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @use "../src/scss/mixins.scss";
  html{
    body{
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      @include mixins.generalView;
    .navBar{
      @include mixins.navBar;
    }
      }
  
  }
</style>
