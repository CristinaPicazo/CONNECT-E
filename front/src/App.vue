<template>
  <div>
    <nav
      data-navBar
      class="p-4 justify-content-around d-inline-block align-top align-items-center navbar-expand-lg navbar-light bg-light d-flex"
    >
      <div v-if="!isloggedIn" class="d-flex justify-content-around container">
        <router-link to="/" class="text-danger text-decoration-none"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'LoginView' }"
          class="text-danger text-decoration-none isLoggedIn"
          >Login</router-link
        >
        <router-link
          :to="{ name: 'SignupView' }"
          class="text-danger text-decoration-none"
          :class="{ 'd-none': isUserAuthenticated }"
          >Signup</router-link
        >
      </div>
      <div v-else class="d-flex justify-content-around container">
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
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { createWebHistory, RouterLink, RouterView } from "vue-router";
import getUserDetails from "./helpers/getUserDetails";

export default {
  history: createWebHistory(import.meta.env.BASE_URL),
  name: "NavBar",
  data() {
    return {
      isloggedIn: false,
    };
  },
  // created() {
  //   this.isUser();
  // },
  components: {
    RouterLink,
    RouterView,
  },
  watch: {
    $route() {
      this.isUserLoggin();
    },
  },
  methods: {
    LogOut() {
      localStorage.removeItem("user");
      localStorage.removeItem("userDetails");
      this.isloggedIn = false;
      this.$router.push("/");
    },
    isUserLoggin() {
      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      console.log("user:", userDetails);
      if (userDetails != null) {
        this.isloggedIn = true;
      }
    },
  },
};
</script>
<style lang="scss">
@use "../src/scss/mixins.scss";
html {
  body {
    @include mixins.generalView;
    [data-navBar] {
      @include mixins.navBar;
    }
  }
}
</style>
