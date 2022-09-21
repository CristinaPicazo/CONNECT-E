<template>
  <div>
    <nav
      data-navBar
      class="p-4 justify-content-around d-inline-block align-top align-items-center navbar-expand-lg navbar-light bg-light d-flex"
    >
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
import { createWebHistory, RouterLink, RouterView } from "vue-router";
// </router-link>:class="isUserAuthenticated ? 'd-block' : 'd-none'"

export default {
  history: createWebHistory(import.meta.env.BASE_URL),
  name: "NavBar",
  // data() {
  //   return {
  //     isUser: false,
  //   };
  // },
  components: {
    RouterLink,
    RouterView,
  },
  watch: {
    $route() {
      this.isUser();
    },
  },
  methods: {
    LogOut() {
      localStorage.removeItem("user");
      localStorage.removeItem("userDetails");
      this.$router.push("/");
    },
    isUser() {
      // console.log("history inside app:", history);
      // console.log("funciona");

      // const publicPages = ["/", "/login", "/signup"];
      // const userLoggin = localStorage.getItem("user");
      // console.log("userLoggin:", userLoggin);

      // if (publicPages.includes(history.state.current)) {
      //   console.log("history.state.current:");
      // }
      // if (!userLoggin) {
      //   console.log("userLoggin not true:");
      // }
      //   let isLoggedIn = document.getElementsByClassName("isLoggedIn");
      //   if (localStorage.getItem("user")) {
      //     isLoggedIn.classList.add("d-none");
      //     console.log("localstoreage true:");
      //     // this.isUserAuthenticated = true
      //     this.isUserAuthenticated.classList.remove("d-none");
      //   } else {
      //     isLoggedIn.classList.remove("d-none");
      //     console.log("localstoreage not true:");
      //     return (this.isUserAuthenticated = false);
      //   }
      // },

      if (localStorage.getItem("user")) {
        console.log("is User");
        return true;
      } else {
        console.log("is not User");
        return false;
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
