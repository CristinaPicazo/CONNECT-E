<template>
  <div>
    <p v-if="isLoading">Loading...</p>
    <p v-if="errorMessage != ''">{{ errorMessage }}</p>
  </div>
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
import axios from "axios";
import getUserDetails from "../helpers/getUserDetails";

export default {
  name: "ProfileView",
  data() {
    return {
      id: getUserDetails().id,
      user: getUserDetails().user,
      email: getUserDetails().email,
      isLoading: false,
      errorMessage: "",
    };
  },
  methods: {
    deleteAccount() {
      axios
        .delete(`http://localhost:3000/posts/profile/${this.id}`)

        .then((response) => {
          return response.json();
        })
        .then((data) => this.$router.push("/signup"));

      localStorage.removeItem("user");
      localStorage.removeItem("userDetails");
    },
  },
  //   getUser() {
  //     // console.log("this.$route.params.id:", this.$route.params.id);
  //     axios
  //       .get("/posts/profile/24") //+this.id
  //       // .get("/posts/profile/" + this.$route.params.id)
  //       .then((response) => {
  //         this.user = response.data.queryResult.user;
  //         this.email = response.data.queryResult.email;

  //         console.log("response:", response.data.queryResult.rows[0]);
  //         // this.post = response.data.queryResult.rows[0];
  //         this.isLoading = false;
  //       })
  //       .catch((error) => {
  //         this.isLoading = false;
  //         this.errorMessage = error.message;
  //       });
  //   },
  // },
  // mounted() {
  //   this.getUser();
  // },

  // mounted() {
  //   let localStorageUser = JSON.parse(localStorage.getItem("userDetails"));
  //   this.id = localStorageUser.id;
  //   this.user = localStorageUser.user;
  //   this.email = localStorageUser.email;
  // },
  // methods: {
  //   deleteAccount() {
  //     axios
  //     .delete(`http://localhost:3000/users/${this.userId}`)

  //     console.log("delete account");
  //     console.log("id", this.id);
  //       await fetch("http://localhost:3003/users/" + this.id, {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((data) => this.$router.push("/signup"));

  //       localStorage.removeItem(this.id);
  //   },
  // },
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
