import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../node_modules/flowbite-vue/dist/index.css'
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import router from "./router";


const app = createApp(App);

library.add(faSearch);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(VueAwesomePaginate);
app.mount("#app");
