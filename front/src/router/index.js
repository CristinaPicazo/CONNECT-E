import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
import PostDetailsView from '../views/PostDetailsView.vue'
import CreatePostView from '../views/CreatePostView.vue'

const routes = [
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
  //catch 404
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
