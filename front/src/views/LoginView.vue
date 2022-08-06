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
export default {
  name: "LoginView",
  setup() {
    let email = "";
    let password = "";
    let errorMessage = ref("");
    return { email, password, errorMessage };
  },
  methods: {
    async onSubmit() {
      await fetch("http://localhost:3003/users")
        .then((response) => response.json())
        .then((data) => {
          data.forEach((user) => {
            if (user.email == this.email && user.password == this.password) {
              let userLogin = {
                user: user.user,
                email: user.email,
              };
              localStorage.setItem(user.id, JSON.stringify(userLogin));
              this.$router.push("/posts");
            } else {
              this.errorMessage = "Email or password is incorrect";
            }
          });
        });
    },
  },
};
</script>

<style lang="scss">
@use "../scss/mixins.scss";
[data-login] {
  @include mixins.forms;
  button {
    @include mixins.buttons;
  }
}
</style>
