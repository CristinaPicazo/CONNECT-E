<template>
  <form
    data-sign
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger"
    @submit.prevent="handleSubmit"
    autocomplete="on"
  >
    <h2 class="text-center display-1 fw-bold">Sign up</h2>

    <div class="form-group mb-3">
      <label for="user" class="form-label">User</label>
      <input
        id="user"
        type="text"
        class="form-control border-3 border-danger"
        v-model="user"
        autocomplete="username"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="email" class="form-label">Email</label>
      <input
        id="email"
        type="email"
        class="form-control border-3 border-danger"
        v-model="email"
        autocomplete="email"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        id="password"
        type="password"
        class="form-control border-3 border-danger"
        v-model="password"
        autocomplete="current-password"
        required
      />
    </div>
    <div class="form-group text-center">
      <button
        type="submit"
        class="btn bg-white rounded rounded-pill col-6 col-md-4 col-lg-2"
      >
        Sign Up
      </button>
    </div>
  </form>
  <div
    v-if="errorMessage != ''"
    class="bg-danger text-white m-2 p-4 text-center rounded rounded-pill"
  >
    <p>{{ errorMessage }}</p>
  </div>
</template>
<script>
import { ref } from "vue";
import axiosHelper from "../helpers/axios.helper";

export default {
  name: "SignupView",
  setup() {
    let user = "";
    let email = "";
    let password = "";
    let errorMessage = ref("");
    return { user, email, password, errorMessage };
  },
  data() {
    return {
      // Check correct email format
      emailRegex: RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    };
  },
  methods: {
    handleSubmit() {
      // Check if email with regex
      const isEmailValid = this.emailRegex.test(this.email);
      if (!isEmailValid || this.user.length < 3 || this.password.length < 3) {
        return (this.errorMessage = "Minimum 3 characters required");
      } else {
        axiosHelper
          .post("/signup", {
            user: this.user,
            email: this.email,
            password: this.password,
          })
          .then(() => {
            // Redirect to login page after signup to create token
            this.$router.push("/login");
          })
          .catch((error) => {
            console.log(error);
            this.errorMessage = "Error";
          });
      }
    },
  },
};
</script>
<style scoped lang="scss">
@use "../scss/mixins.scss";
[data-sign] {
  @include mixins.forms;
  button {
    @include mixins.buttons;
  }
}
</style>
