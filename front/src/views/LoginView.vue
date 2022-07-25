<template>
  <form
    class="forms p-5 bg-white mb-5 rounded-3 border border-danger"
    @submit.prevent="onSubmit"
  >
    <h2 class="text-danger text-center">Login</h2>
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
      class="text-danger btn buttons bg-white rounded rounded-pill col-12"
    >
      Submit
    </button>
    {{ errorMessage }}
  </form>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "cris@gmail.com",
      password: "cris",
      errorMessage: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.email == "cris@gmail.com" && this.password == "cris") {
        this.$router.push("/posts");
      } else {
        this.errorMessage = "Email or password is incorrect";
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
