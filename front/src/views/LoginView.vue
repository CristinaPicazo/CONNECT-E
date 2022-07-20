 <template>
    <div class="sign">
      <form 
      class="forms p-5" 
        @submit="onSubmit"
        :validation-schema="schema" 
        
        action="/post"
        method="post">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
        <input name="email" type="email" class="form-control" id="email" :class="{ 'is-invalid': errors.email }" aria-describedby="emailHelp" v-model="email" required>
          <div class="invalid-feedback">{{errors.email}}</div>

      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input name="password" type="password" class="form-control" id="password" aria-describedby="passwordHelp" v-model="password" :class="{ 'is-invalid': errors.password }" required>
          <div class="invalid-feedback">{{errors.password}}</div>
      </div>
      <button type="submit" value="Submit" class="btn buttons align-self-center" :disabled="isSubmitting">
        <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
      Submit</button>
    </form>
    </div>
</template>
 
<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

// import { useAuthStore } from '../store/auth.store';

// const schema = Yup.object().shape({
//     email: Yup.string().required('Email is required'),
//     password: Yup.string().required('Password is required')
// });

// function onSubmit(values, { setErrors }) {
//     const authStore = useAuthStore();
//     const { email, password } = values;

//     return authStore.login(email, password)
//         .catch(error => setErrors({ apiError: error }));
// }
// import { Form, Field } from 'vee-validate';
// import * as Yup from 'yup';
// // import { useAuthStore } from '../store/auth.store';


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