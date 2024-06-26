import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../node_modules/flowbite-vue/dist/index.css'
import VueAwesomePaginate from "vue-awesome-paginate";
import { createPinia } from 'pinia'
import "vue-awesome-paginate/dist/style.css";
import router from "./router";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

library.add(faSearch);
app.component("font-awesome-icon", FontAwesomeIcon);
// eslint-disable-next-line vue/multi-word-component-names
app.use(router);
app.use(pinia);
app.use(VueAwesomePaginate);
app.mount("#app");
