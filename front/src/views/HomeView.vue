<template>
  <div class="home">
      <button type="button" class="btn homeButton"><router-link to="/login" tag="button">Login</router-link></button>
      <button type="button" class="btn homeButton"><router-link to="/signup" tag="button">Signup</router-link></button>
      <button type="button" class="btn btn-primary">Primary</button>

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
  @include mixins.generalBackground;
  .home{
    // background-color: blue;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    .homeButton{
      @include mixins.buttons;
      font-size: 18px;
      align-self: center;
    }
  }

}
</style>