<template>
  <div
    data-home
    class="vh-100 d-flex flex-column flex-sm-row align-items-center"
  >
    <div
      class="mb-5 mt-5 m-sm-5 pt-5 pb-5 bg-white rounded-3 border border-danger text-center text-danger"
    >
      <h2 class="text-center display-1 fw-bold pb-3">Groupomania</h2>
      <p class="p-2">
        Our company, a multinational retail corporation, is expandind by the
        day. We've grown by 100% over the last three years, and we now employ
        over 600 people.
      </p>
      <p class="p-2">
        We strive to be a leading retail platform that creates innovative and
        enriching lifestyle experiences, paving way for individuals, businesses
        and communities to sustainably thrive forward together.
      </p>
      <p class="p-2">
        Groupomania believe passionately that our role is to bring sustained
        value that impacts everyone, enriching lives and nurturing communities.
      </p>

      <!-- <img src="../images/icon-above-font.png" alt="icon above" /> -->

      <button
        @click="goToLogin()"
        type="button"
        class="mb-5 p-3 w-50 my-auto btn bg-white rounded rounded-pill"
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
          class="text-danger text-decoration-none mr-1"
          >Signup</router-link
        >
      </button>
    </div>
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
