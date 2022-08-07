<template>
  <div
    data-home
    class="vh-100 d-flex flex-column flex-sm-row align-items-center"
  >
    <button
      @click="goToLogin()"
      type="button"
      class="m-5 p-3 w-50 my-auto btn bg-white rounded rounded-pill"
    >
      <router-link
        to="/login"
        tag="button"
        class="text-danger text-decoration-none"
        >Login</router-link
      >
    </button>
    <button
      @click="goToSignup()"
      type="button"
      class="m-5 p-3 w-50 my-auto btn bg-white rounded rounded-pill"
    >
      <router-link
        to="/signup"
        tag="button"
        class="text-danger text-decoration-none"
        >Signup</router-link
      >
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>
<style scoped lang="scss">
@use "../scss/mixins.scss";
[data-home] {
  button {
    @include mixins.buttons;
    font-size: 18px;
  }
}
</style>
