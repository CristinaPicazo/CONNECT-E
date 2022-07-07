<template>
  <div class="home">
      <button type="button" class="btn buttons"><router-link to="/login" tag="button">Login</router-link></button>
      <button type="button" class="btn buttons"><router-link to="/signup" tag="button">Signup</router-link></button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>
<style lang="scss">
@use "../scss/mixins.scss";
  .home{
    display: flex;
    flex-direction: column;
    .buttons{
      @include mixins.buttons;
      margin: 30px auto;
      font-size: 18px;
    }
  

}
</style>