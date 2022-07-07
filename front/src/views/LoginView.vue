<template>
    <div class="sign">
      <form 
      class="forms p-5" 
        @submit.prevent="checkForm"
        action="/post"
        method="post">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" v-model="password" required>
      </div>
      <button type="submit" value="Submit" class="btn buttons align-self-center">Submit</button>
    </form>
    </div>
</template>
 
<script>
export default {
    data() {
        return {
          email: null,
          password: null,
          errors: [],
        }
    },
    setup(data) {
      const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    },
    methods: {
        checkForm: function() {
            if (this.email && this.password) return true
            this.errors = []
            if(!this.email) this.errors.push('Email is required')
            if(!this.password) this.errors.push('Password is required')
            
          // if(emailRegex.test(email)){
          //   console.log('login clicked')
          // }else{
          //   console.log('email is not valid')
          // }
        },
        methods:{
    checkForm: function (e) {
      if (this.email && this.password) {
        return true;
      }

      this.errors = [];

      if (!this.email) {
        this.errors.push('Email required.');
      }
      if (!this.password) {
        this.errors.push('Password required.');
      }

      e.preventDefault();
    }
    }
    }
}
</script>
 
<style lang="scss">
 @use "../scss/mixins.scss";
.sign{
  .forms{
    @include mixins.forms;
    .buttons{
      @include mixins.buttons;
    }
  }
}
</style>