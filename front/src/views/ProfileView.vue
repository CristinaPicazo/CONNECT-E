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
        .delete(
          `http://localhost:4200/posts/profile/${getUserDetails().id}`,
          {}
        )
        .then(() => this.$router.push("/signup"))
        .catch((error) => {
          this.errorMessage = error.message;
        });
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
