import { createApp, markRaw } from "vue";
import App from "./App.vue";
import { router } from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4200";

const app = createApp(App);

app.use(router);

app.use(BootstrapVue3);
app.mount("#app");
