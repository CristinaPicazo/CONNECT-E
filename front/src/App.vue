<template>
  <div>
    <nav
      data-navBar
      class="p-4 justify-content-around d-inline-block align-top align-items-center navbar-expand-lg navbar-light bg-light d-flex"
    >
      <div v-if="!isloggedIn" class="d-flex justify-content-around container">
        <router-link to="/" class="text-decoration-none">Home</router-link>
        <router-link
          :to="{ name: 'LoginView' }"
          class="text-decoration-none isLoggedIn"
          >Login</router-link
        >
        <router-link :to="{ name: 'SignupView' }" class="text-decoration-none"
          >Signup</router-link
        >
      </div>
      <div v-else class="d-flex justify-content-around container">
        <router-link :to="{ name: 'PostsView' }" class="text-decoration-none"
          >Post</router-link
        >
        <router-link
          :to="{ name: 'CreatePostView' }"
          class="text-decoration-none"
          >New</router-link
        >
        <router-link
          :to="{ name: 'ProfileView', params: { id } }"
          class="text-decoration-none"
          >Profile</router-link
        >
        <a @click="LogOut" class="text-decoration-none">LogOut</a>
      </div>
    </nav>
    <router-view />
  </div>
  <footer class="text-center">
    <img
      src="../src/images/icon-left-font-monochrome-black.png"
      alt="icon"
      class="col-4 col-md-2"
    />
  </footer>
</template>

<script>
import { createWebHistory, RouterLink, RouterView } from "vue-router";

export default {
  history: createWebHistory(import.meta.env.BASE_URL),
  name: "NavBar",
  data() {
    return {
      id: "",
      isloggedIn: false,
      publicPages: ["/", "/login", "/signup"],
    };
  },
  components: {
    RouterLink,
    RouterView,
  },
  watch: {
    $route(event) {
      this.isUserLoggin();
      this.onunload();
    },
  },
  methods: {
    // Remove all from the local storage (user details and token)
    LogOut() {
      localStorage.removeItem("token");
      localStorage.removeItem("userDetails");
      this.isloggedIn = false;
      // Send user to the main page
      this.$router.push("/");
    },
    // Check if the user is logged in to send user id to ProfileView
    isUserLoggin() {
      let userDetails = JSON.parse(localStorage.getItem("userDetails"));
      if (userDetails != null) {
        this.id = userDetails.id;
        this.isloggedIn = true;
      }
    },
    onunload() {
      // In case user hasn't logged out, remove all from the local storage
      const publicPages = ["/", "/login", "/signup"];
      let checkIfPublicPage = this.publicPages.includes(
        window.location.pathname
      );
      if (checkIfPublicPage) {
        localStorage.removeItem("token");
        localStorage.removeItem("userDetails");
        this.isloggedIn = false;
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
