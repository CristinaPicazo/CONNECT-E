import { createApp, markRaw } from "vue";
import App from "./App.vue";
import { router } from "./router";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import VueAxios from "vue-axios";


axios.defaults.baseURL = 'http://localhost:4200';

const app = createApp(App);


app.use(router);

app.use(BootstrapVue3);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
