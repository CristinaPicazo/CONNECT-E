<template>
<div>
  <!-- <nav class="navBar"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <img class="navbar-brand" src="images/icon.png"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <router-link to="/">Home</router-link>
    <router-link :to="{name: 'Signup'}">Signup</router-link>
    <router-link :to="{name: 'Login'}">Login</router-link>
    <router-link :to="{name: 'Post'}">Post</router-link>
    <router-link :to="{name: 'CreatePost'}">New</router-link>
  </nav>
    <!-- <button class="footerButtons" @click="redirect">Redirect</button>
    <button class="footerButtons" @click="back">Go back</button>
    <button class="footerButtons" @click="forward">Go forward</button> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    redirect(){
      this.$router.push({name: 'Home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
  }
}
</script>

<style lang="scss">
  @use "../src/scss/mixins.scss";
  body{
    @include mixins.generalView;
    .navBar{
      @include mixins.navBar;
    }
  }
  // .footer{
  //   @include mixins.footer;
  // }
</style>
