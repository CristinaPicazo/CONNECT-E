<template>
  <form
    class="forms p-5 bg-white mb-5 rounded-3 border border-danger"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-danger text-center">Sign up</h2>

    <div class="form-group mb-3">
      <label for="username" class="text-danger form-label">Username</label>
      <input
        id="username"
        type="text"
        class="form-control border-3 border-danger"
        v-model="username"
      />
    </div>
    <div class="form-group mb-3">
      <label for="email" class="text-danger form-label">Email</label>
      <input
        id="email"
        type="email"
        class="form-control border-3 border-danger"
        v-model="email"
      />
    </div>
    <div class="form-group mb-3">
      <label for="password" class="text-danger form-label">Password</label>
      <input
        id="password"
        type="password"
        class="form-control border-3 border-danger"
        v-model="password"
      />
    </div>
    <div class="form-group align-self-center">
      <button
        type="submit"
        class="text-danger btn buttons bg-white rounded rounded-pill col-12"
      >
        Sign Up
      </button>
    </div>
  </form>
  <div v-if="message" class="alert">
    {{ message }}
  </div>
</template>
<script>
export default {
  name: "SignupView",
  data() {
    return {
      username: "cris",
      password: "cris",
      email: "cris@gmail.com",
      loggedIn: false,

      emailRegex: RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
      message: "",
    };
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/posts");
    }
  },
  methods: {
    handleSubmit() {
      const isEmailValid = this.emailRegex.test(this.email);
      if (!isEmailValid) {
        this.message = "Email is not valid";
        return;
      }
    },
  },
};
</script>
<style lang="scss">
@use "../scss/mixins.scss";
.sign {
  .forms {
    @include mixins.forms;
    .buttons {
      @include mixins.buttons;
    }
  }
}
</style>
