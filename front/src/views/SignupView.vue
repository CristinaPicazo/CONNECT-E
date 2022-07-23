<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label for="username">Username</label>
      <input
        id="username"
        type="text"
        class="form-control"
        v-model="username"
      />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" type="email" class="form-control" v-model="email" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input
        id="password"
        type="password"
        class="form-control"
        v-model="password"
      />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-primary">Sign Up</button>
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
