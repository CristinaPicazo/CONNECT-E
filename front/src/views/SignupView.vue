<template>
<div class="signUp">
  <form class="signUpForm">
    <h2>Sign Up</h2>
    <label for="email">Email:</label>
    <input type="email" v-model="email" required>
   
    <label for="password">Password:</label>
    <input type="password" v-model="password" required>
   
    <label for="user">Nickname:</label>
    <input type="text" v-model="user" required>

    <button class="homeButton" @click="signup">Sign Up</button>
  </form>
  </div>
</template>
 
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            user: '',
            role: 'developer',
            terms: false,
            tempTopic: '',
            topics: []
        }
    }
}
</script> 
<style lang="scss">
@use "../scss/mixins.scss";
body{
  @include mixins.generalBackground;
  .signUp{
    @include mixins.signUp;
    .homeButton{
      @include mixins.buttons;
    }
  }
}

 
</style>