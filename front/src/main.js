import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";



const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
})

app.use(router)
app.use(pinia)
// app.use(useStore)
app.use(BootstrapVue3)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')


