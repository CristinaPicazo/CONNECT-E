<template>
<div>
  <nav class="navBar">
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
    @include mixins.generalBackground;
    .navBar{
      @include mixins.navBar;
    }
  }
  // .footer{
  //   @include mixins.footer;
  // }
</style>
