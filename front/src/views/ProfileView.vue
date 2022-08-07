<template>
  <form
    data-profile
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger text-danger text-center"
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
  </form>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ProfileView",
  data() {
    return {
      id: "",
      user: "",
      email: "",
    };
  },

  mounted() {
    let id = window.localStorage.key(0);
    let localStorageUser = JSON.parse(localStorage.getItem(id));

    this.id = id;
    this.user = localStorageUser.user;
    this.email = localStorageUser.email;
  },
  methods: {
    async deleteAccount() {
      console.log("delete account");
      console.log("id", this.id);
      await fetch("http://localhost:3003/users/" + this.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => this.$router.push("/signup"));

      localStorage.removeItem(this.id);
    },
  },
};
</script>
<style scoped lang="scss">
@use "../scss/mixins.scss";
[data-profile] {
  @include mixins.forms;
  .buttons {
    @include mixins.buttons;
  }
}
</style>
