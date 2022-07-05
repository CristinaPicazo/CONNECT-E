<template>
    <div>
  <form 
  class="forms"
    @submit.prevent="checkForm"
    action="/post"
    method="post">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" required>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" v-model="password" required>
  </div>
  <div class="mb-3">
    <label for="user" class="form-label">User</label>
    <input type="user" class="form-control" id="user" aria-describedby="userHelp" v-model="user" required>
  </div>
  <button type="submit" @click="signup" value="Submit" class="btn buttons align-self-center">Submit</button>
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
        }
    }
}
</script> 
<style lang="scss">
@use "../scss/mixins.scss";
body{
  @include mixins.generalView;
  .signUp{
    @include mixins.signUp;
    .buttons{
      @include mixins.buttons;
    }
  }
}

 
</style>