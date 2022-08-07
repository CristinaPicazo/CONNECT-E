<template>
  <form
    data-sign
    class="mt-5 m-sm-5 p-5 bg-white mb-5 rounded-3 border border-danger"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-danger text-center display-1 fw-bold">Sign up</h2>

    <div class="form-group mb-3">
      <label for="user" class="text-danger form-label">User</label>
      <input
        id="user"
        type="text"
        class="form-control border-3 border-danger"
        v-model="user"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="email" class="text-danger form-label">Email</label>
      <input
        id="email"
        type="email"
        class="form-control border-3 border-danger"
        v-model="email"
        required
      />
    </div>
    <div class="form-group mb-3">
      <label for="password" class="text-danger form-label">Password</label>
      <input
        id="password"
        type="password"
        class="form-control border-3 border-danger"
        v-model="password"
        required
      />
    </div>
    <div class="form-group align-self-center">
      <button
        type="submit"
        class="text-danger btn bg-white rounded rounded-pill col-12"
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

export default {
  name: "SignupView",
  setup() {
    let id = Math.floor(Math.random() * 10) + new Date().getTime();
    let user = "";
    let email = "";
    let password = "";
    let errorMessage = ref("");
    return { id, user, email, password, errorMessage };
  },
  data() {
    return {
      emailRegex: RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/posts");
    }
  },
  methods: {
    async handleSubmit() {
      const isEmailValid = this.emailRegex.test(this.email);
      if (!isEmailValid || this.user.length < 3 || this.password.length < 3) {
        return (this.errorMessage = "Minimum 3 characters required");
      }
      const newUser = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: this.id,
          user: this.user,
          email: this.email,
          password: this.password,
        }),
      };

      await fetch("http://localhost:3003/users", newUser)
        .then((res) => res.json())
        .then(() => {
          let userLogin = {
            user: this.user,
            email: this.email,
          };
          localStorage.setItem(this.id, JSON.stringify(userLogin));
          return this.$router.push("/posts");
        });
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
