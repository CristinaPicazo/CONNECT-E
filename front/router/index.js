import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../src/views/HomeView.vue'
import SignupView from '../src/views/SignupView.vue'
import LoginView from '../src/views/LoginView.vue'
import PostView from '../src/views/PostView.vue'
import PostDetailsView from '../src/views/PostDetailsView.vue'
import CreatePostView from '../src/views/CreatePostView.vue'

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
