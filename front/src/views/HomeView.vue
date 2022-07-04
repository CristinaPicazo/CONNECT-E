<template>
  <div class="home d-flex justify-content-around">
      <button type="button" class="btn homeButton btn-ligh align-self-center"><router-link to="/login" tag="button">Login</router-link></button>
      <button type="button" class="btn homeButton align-self-center"><router-link to="/signup" tag="button">Signup</router-link></button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>
<style lang="scss">
@use "../scss/mixins.scss";
body{
  @include mixins.generalView;
  .home{
    height: 100vh;
    .homeButton{
      @include mixins.buttons;
      font-size: 18px;
      // align-self: center;
    }
  }

}
</style>