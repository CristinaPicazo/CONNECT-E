import { defineStore } from "pinia";
// Import axios to make HTTP requests
import axios from "axios";

export default {
  name: "PostsStore",
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    getPosts() {
      this.isLoading = true;
      fetch("http://localhost:3002/posts")
        .then((response) => response.json())
        .then((data) => {
          (this.posts = data), (this.isLoading = false);
          console.log("posts:", posts);
        });
    },
  },
  mounted() {
    this.getPosts();
  },
};

// export const usePostsStore = defineStore("posts", {
//   state: () => ({
//     posts: [],
//   }),
//   getters: {
//     getPosts(state) {
//       return state.posts;
//     },
//   },
//   actions: {
//     async fetchPosts() {
//         fetch("http://localhost:3002/posts"),{
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"

//         },
//         body: JSON.stringify({
//             "id": this.id,
//             "user": this.user,
//             "title": this.title,
//             "body": this.body,
//             "multimedia": this.multimedia,
//         })
//     }
//     // async fetchPosts() {
//     //   try {
//     //     const posts = await fetch("http://localhost:3002/posts");
//     //     this.posts = posts.data;
//     //     console.log("posts from fetch:", posts);
//     //   } catch (error) {
//     //     alert(error);
//     //     console.log(error);
//     //   }
//     // },
//     },
//     },
// });
