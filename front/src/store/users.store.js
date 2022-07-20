import { defineStore } from 'pinia';

import fetchWrapper from '../services/fetch-wrapper';

const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

const useUsersStore = defineStore({
    id: 'users',
    state: () => ({
        users: {}
    }),
    actions: {
        async getAll() {
            this.users = { loading: true };
            fetchWrapper.get(baseUrl)
                .then(users => this.users = users)
                .catch(error => this.users = { error })
        }
    }
});

export default useUsersStore;