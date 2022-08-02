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
      <a @click="LogOut" class="text-danger text-decoration-none">LogOut</a>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "NavBar",
  components: {
    RouterLink,
    RouterView,
  },
  methods: {
    LogOut() {
      localStorage.removeItem(window.localStorage.key(0));
      // localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
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
