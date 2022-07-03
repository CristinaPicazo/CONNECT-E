<template>
    <div class="signUp">
  <form class="signUpForm">
    <label>Email:</label>
    <input type="email" v-model="email" required>
   
    <label>Password:</label>
    <input type="password" v-model="password" required>
 
    <button class="homeButton" @click="login">Login</button>
  </form>
  </div>
</template>
 
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    setup(data) {
      const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    },
    methods: {
        login() {
          if(emailRegex.test(email)){
            console.log('login clicked')
          }else{
            console.log('email is not valid')
          }
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