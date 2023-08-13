import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import { OhVueIcon } from "oh-vue-icons";
import './icons'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import axios from 'axios'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true;

createApp(App).component('v-icon', OhVueIcon).use(pinia).use(router).mount('#app')
