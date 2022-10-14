<template>
  <div
    data-home
    class="vh-100 d-flex flex-column flex-sm-row align-items-center"
  >
    <div
      class="mb-5 mt-5 m-sm-5 pt-5 pb-5 bg-white rounded-3 border border-danger text-center"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    goToLogin() {
      // Redirect to login page
      this.$router.push("/login");
    },
    goToSignup() {
      // Redirect to signup page
      this.$router.push("/signup");
    },
  },
};
</script>
<style scoped lang="scss"></style>
