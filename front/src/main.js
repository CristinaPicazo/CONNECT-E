import { createApp, markRaw } from "vue";
// import { createPinia } from "pinia";
import App from "./App.vue";
import { router } from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import Vue from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";

// Vue.use(VueAxios, axios)

axios.defaults.baseURL = 'http://localhost:4200';
// Vue.config.productionTip = false

const app = createApp(App);
// const pinia = createPinia();
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

// pinia.use(({ store }) => {
//   store.router = markRaw(router);
// });

app.use(router);
// app.use(pinia);
// app.use(useStore)
app.use(BootstrapVue3);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
