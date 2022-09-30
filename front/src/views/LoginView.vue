<template>
  <form
    data-login
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger"
    @submit.prevent="onSubmit"
  >
    <h2 class="text-danger text-center display-1 fw-bold">Login</h2>
    <div class="mb-3">
      <label for="email" class="text-danger form-label">Email address</label>
      <input
        name="email"
        type="email"
        class="form-control border-3 border-danger"
        id="email"
        aria-describedby="emailHelp"
        v-model="email"
        required
      />
    </div>
    <div class="mb-3">
      <label for="password" class="text-danger form-label">Password</label>
      <input
        name="password"
        type="password"
        class="form-control border-3 border-danger"
        id="password"
        aria-describedby="passwordHelp"
        v-model="password"
        required
      />
    </div>
    <button
      type="submit"
      value="Submit"
      class="text-danger btn bg-white rounded rounded-pill col-12"
    >
      Submit
    </button>
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
import axios from "axios";

export default {
  name: "LoginView",
  setup() {
    let email = "";
    let password = "";
    let errorMessage = ref("");
    return { email, password, errorMessage };
  },
  methods: {
    onSubmit() {
      axios
        .post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((loginResult) => {
          if (loginResult.data.accessToken) {
            this.$router.push("/posts");
            console.log(
              "loginResult.data.accessToken:",
              loginResult.data.accessToken
            );
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${loginResult.data.accessToken}`;
            localStorage.setItem(
              "user",
              JSON.stringify(loginResult.data.accessToken)
            );
            localStorage.setItem(
              "userDetails",
              JSON.stringify(loginResult.data.userDetails)
            );

            // localStorage.setItem("token", JSON.stringify(loginResult.data.token));
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
