import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import PostsView from "../views/PostsView.vue";
import PostDetailsView from "../views/PostDetailsView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import ProfileView from "../views/ProfileView.vue";
import getUserDetails from "../helpers/getUserDetails.js";

let id = getUserDetails().id;

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
      props: true,
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
      path: `/posts/profile/${id}`,
      name: "ProfileView",
      component: ProfileView,
      props: true,
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

router.beforeEach((to, from, next) => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  if (userDetails) {
    id = userDetails.id;
    console.log("id inside index.js:", id);
    next();
  }
  if (userDetails && (to.name === "LoginView" || to.name === "SignupView")) {
    next({ name: "HomeView" });
    // this.props = userDetails.id;
  } else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !userDetails
  ) {
    next({ name: "LoginView" });
  } else {
    next();
  }
});
// ***** TO ACTIVATE AFTER ADDING TOKEN *****
// const user = localStorage.getItem("userDetails");
// console.log('user:', user)
// const id = user.id;
// console.log('id.....:', user[0][0])

// router.beforeEach((to, from, next) => {
//   // const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//   // const currentUser = localStorage.getItem("user");

//   const historyCurrent = history.state.current;
//   console.log('historyCurrent:', historyCurrent)
//   const publicPages = ["/", "/login", "/signup"];

//   if(publicPages.includes(historyCurrent)) {
//     console.log('true:')
//     next();
//   } else {
//     next("/login");
//   }
// });

// console.log('history',history)
// console.log('history.state',history.state.current)
//   if (requiresAuth && !currentUser) {
//     console.log("You must be logged in to view this page");
//     next("/");
//   } else {
//     next();
//   }
// });

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
