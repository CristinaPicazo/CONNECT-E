<template>
    <div class="profile">
  <form class="forms p-5">
    <div class="mb-3">
        <h2 for="user" class="form-label">User</h2>
        <p id="user" aria-describedby="user">{{user}}</p>
    </div>
    <div class="mb-3">
      <h2 for="email" class="form-label">Email</h2>
    <p type="email" id="email" aria-describedby="email">{{email}}</p>
  </div>
  <div class="mb-3">
    <h2 for="password" class="form-label">Password</h2>
    <p type="password" id="password" aria-describedby="password">{{password}}</p>
  </div>
  <button type="button" @click="deleteUser" class="btn buttons align-self-center">Delete account</button>
</form>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
            email: 'email',
            password: 'password',
            user: 'user',
        }
    }
}
</script> 
<style lang="scss">
 @use "../scss/mixins.scss";
.profile{
  .forms{
    @include mixins.forms;
    text-align: center;
    .buttons{
      @include mixins.buttons;
    }
  }
}
</style>