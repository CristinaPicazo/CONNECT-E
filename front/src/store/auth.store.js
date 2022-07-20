import { defineStore } from 'pinia';

import fetchWrapper from '../services/fetch-wrapper';
import { router } from '../router';
import { markRaw } from 'vue';
import { createPinia } from 'pinia'


const pinia = createPinia();
const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

const useAuthStore = defineStore('auth', {
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(username, password) {
            const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});

pinia.use(({ useAuthStore }) => {
    useAuthStore.router = markRaw(router)
})

export default useAuthStore;