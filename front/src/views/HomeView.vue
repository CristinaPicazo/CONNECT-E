<template>
  <div class="home">
    <button
      @click="goToLogin()"
      type="button"
      class="btn buttons bg-white mb-5 rounded rounded-pill"
    >
      <router-link
        to="/login"
        tag="button"
        class="text-danger p-5 text-decoration-none"
        >Login</router-link
      >
    </button>
    <button
      @click="goToSignup()"
      type="button"
      class="btn buttons bg-white mb-5 rounded rounded-pill"
    >
      <router-link
        to="/signup"
        tag="button"
        class="text-danger p-5 text-decoration-none"
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
<style lang="scss">
@use "../scss/mixins.scss";
.home {
  display: flex;
  flex-direction: column;
  .buttons {
    @include mixins.buttons;
    // margin: 30px auto;
    font-size: 18px;
  }
}
</style>
