<template>
  <div
    class="forms p-5 bg-white mb-5 rounded-3 border border-danger text-danger text-center"
    @submit.prevent="deleteAccount"
  >
    <h2 class="display-1 fw-bold">Profile</h2>
    <h3 class="text-danger form-label">User</h3>
    <p id="user">{{ user }}</p>

    <h3 for="email" class="text-danger form-label">Email</h3>
    <p id="email">{{ email }}</p>

    <button
      type="submit"
      class="text-danger btn buttons bg-white rounded rounded-pill col-12"
    >
      Delete account
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ProfileView",
  data() {
    return {
      user: window.localStorage.getItem("user"),
      id: "",
      // user: "",
      email: "",
    };
  },
  // onMounted() {
  //   id = localStorage.getItem(keyName);
  //   console.log("this.id:", this.id);
  //   user = localStorage.getItem("user");
  //   console.log("this.user:", this.user);
  //   email = localStorage.getItem("email");
  //   console.log("this.email:", this.email);
  // },
  methods: {
    deleteAccount() {
      console.log("$route.params.id:", $route.params.id);
      fetch("http://localhost:3003/users/" + this.$route.params.id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          this.$router.push("/signup");
        });
    },
  },
};
</script>
<style lang="scss">
@use "../scss/mixins.scss";
.forms {
  @include mixins.forms;
  .buttons {
    @include mixins.buttons;
    margin: 10px auto;
  }
}
</style>
