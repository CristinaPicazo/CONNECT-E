<template>
  <div class="sign">
    <form class="forms p-5" @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          name="email"
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          name="password"
          type="password"
          class="form-control"
          id="password"
          aria-describedby="passwordHelp"
          v-model="password"
          required
        />
      </div>
      <button type="submit" value="Submit" class="btn align-self-center">
        Submit
      </button>
      {{ errorMessage }}
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
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
