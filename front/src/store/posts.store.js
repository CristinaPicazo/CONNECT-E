import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const usePostsStore = defineStore("post", {
    state: () => ({
        posts: ['hola']
    }),
    getters: {
        getPosts(state) {
            return state.posts
        }
    },
    actions: {
        async fetchPosts() {
            try {
                const data = await axios.get('http://localhost:3002/posts')
                this.posts = data.data
            }
            catch (error) {
                alert(error)
                console.log(error)
            }
        }
    },
})
