import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const usePostsStore = defineStore("post", {
    state: () => ({
        posts: []
    }),
    getters: {
        getPosts(state) {
            return state.posts
        }
    },
    actions: {
        async fetchPosts() {
            try {
                const posts = await fetch('http://localhost:3002/posts')
                console.log('posts:', posts)
                this.posts = posts.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
})
