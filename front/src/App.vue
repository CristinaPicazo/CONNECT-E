<template>
  <div>
    <nav
      class="justify-content-around fixed-top align-items-center navBar navbar-expand-lg navbar-light bg-light d-flex"
    >
      <router-link to="/" class="text-danger text-decoration-none"
        >Home</router-link
      >
      <router-link
        :to="{ name: 'LoginView' }"
        class="text-danger text-decoration-none"
        >Login</router-link
      >
      <router-link
        :to="{ name: 'SignupView' }"
        class="text-danger text-decoration-none"
        >Signup</router-link
      >
      <router-link
        :to="{ name: 'PostsView' }"
        class="text-danger text-decoration-none"
        >Post</router-link
      >
      <router-link
        :to="{ name: 'CreatePostView' }"
        class="text-danger text-decoration-none"
        >New</router-link
      >
      <router-link
        :to="{ name: 'ProfileView' }"
        class="text-danger text-decoration-none"
        >Profile</router-link
      >
    </nav>
    <router-view />
  </div>
</template>
<!-- <template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
        <router-link to="/" class="nav-link">Home</router-link>
        </li>
         <li class="nav-item">
          <router-link :to="{name: 'Login'}" class="nav-link">
            Login
          </router-link>
        </li>
      </div> -->
<!-- <li class="nav-item">
          <router-link v-if="currentUser" :to="{name: 'Post'}" class="nav-link">User</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" :to="{name: 'Post'}" class="nav-link">User</router-link>
        </li>
      </div>
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{name: 'Signup'}" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li> -->
<!-- <li class="nav-item">
          <router-link :to="{name: 'Signup'}" class="nav-link">
            Signup
          </router-link>
        </li> -->

<!-- <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{name: 'Profile'}" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div> -->
<!-- </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template> -->
<script>
import { RouterLink, RouterView } from "vue-router";
</script>
<style lang="scss">
@use "../src/scss/mixins.scss";
html {
  body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @include mixins.generalView;
    .navBar {
      @include mixins.navBar;
    }
  }
}
</style>
