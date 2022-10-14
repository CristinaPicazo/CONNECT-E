import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import PostsView from "../views/PostsView.vue";
import PostDetailsView from "../views/PostDetailsView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import ProfileView from "../views/ProfileView.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/signup",
      name: "SignupView",
      component: SignupView,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
    {
      path: "/posts",
      name: "PostsView",
      component: PostsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/posts/:id",
      name: "PostDetailsView",
      component: PostDetailsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/posts/newPost",
      name: "CreatePostView",
      component: CreatePostView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/posts/profile/:id",
      name: "ProfileView",
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
    // catch 404
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
  linkActiveClass: "active-link",
});
