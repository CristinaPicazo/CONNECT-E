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
    },
    {
      path: "/posts/:id",
      name: "PostDetailsView",
      component: PostDetailsView,
      props: true,
    },
    {
      path: "/posts/newPost",
      name: "CreatePostView",
      component: CreatePostView,
    },
    {
      path: "/profile",
      name: "ProfileView",
      component: ProfileView,
    },
    // catch 404
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
  linkActiveClass: "active-link",
});

// ***** TO ACTIVATE AFTER ADDING TOKEN *****

// router.beforeEach(() => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ["/", "/login", "/signup"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");
//   console.log('loggedIn:', loggedIn)

//   if (loggedIn == null) {
//     return "/";
//   }

// });
// if (authRequired) {
//   // auth.returnUrl = to.fullPath;
//   return "/login";
// }
