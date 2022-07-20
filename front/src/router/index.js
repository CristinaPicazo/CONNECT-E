import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
import PostDetailsView from '../views/PostDetailsView.vue'
import CreatePostView from '../views/CreatePostView.vue'
import ProfileView from '../views/ProfileView.vue'
import useAuthStore from '../store/auth.store';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/post',
      name: 'Post',
      component: PostView
    },
    {
      path: '/post/:id',
      name: 'PostDetails',
      component: PostDetailsView,
      props: true
    },
    {
      path: '/new',
      name: 'CreatePost',
      component: CreatePostView,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView,
    },
    //catch 404
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
});

// ***** TO ACTIVATE AFTER ADDING TOKEN *****

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/', '/login', '/signup'];
//   const authRequired = !publicPages.includes(to.path);
//   const auth = useAuthStore();

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath;
//     return '/login';
//   }
// });

