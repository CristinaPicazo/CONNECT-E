<template>
  <form
    data-login
    class="col col-md-8 mx-auto mt-5 p-5 bg-white mb-5 rounded-3 border border-danger text-break text-center"
    @submit.prevent="onSubmit"
    autocomplete="on"
  >
    <h2 class="text-center display-1 fw-bold">Login</h2>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        name="email"
        type="email"
        class="form-control border-3 border-danger"
        id="email"
        aria-describedby="emailHelp"
        v-model="email"
        autocomplete="email"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        name="password"
        type="password"
        class="form-control border-3 border-danger"
        id="password"
        aria-describedby="passwordHelp"
        v-model="password"
        autocomplete="current-password"
        required
      />
    </div>
    <div class="form-group text-center">
      <button
        type="submit"
        value="Submit"
        class="btn bg-white rounded rounded-pill col-6 col-md-4 col-lg-2"
      >
        Submit
      </button>
    </div>
    <div
      v-if="errorMessage != ''"
      class="bg-danger text-white m-2 p-4 text-center rounded rounded-pill"
    >
      <p>{{ errorMessage }}</p>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
// import axios from "axios";
import axiosHelper from "../helpers/axios.helper";

export default {
  name: "LoginView",
  setup() {
    let email = "";
    let password = "";
    let errorMessage = ref("");
    return { email, password, errorMessage };
  },
  methods: {
    // Send user details to backend
    onSubmit() {
      axiosHelper
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((loginResult) => {
          if (loginResult.data.accessToken) {
            // Store token in local storage
            localStorage.setItem(
              "token",
              JSON.stringify(loginResult.data.accessToken)
            );
            // Store user details in local storage
            localStorage.setItem(
              "userDetails",
              JSON.stringify(loginResult.data.userDetails)
            );
            // Redirect to posts page when login is successful
            this.$router.push("/posts");
          } else {
            this.errorMessage = loginResult.data.message;
          }
        })
        .catch((error) => {
          this.errorMessage = error.message;
        });
    },
  },
};
</script>

<style scoped lang="scss">
@use "../scss/mixins.scss";
[data-login] {
  @include mixins.forms;
  button {
    @include mixins.buttons;
  }
}
</style>
