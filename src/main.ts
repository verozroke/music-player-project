import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import { OhVueIcon } from "oh-vue-icons";
import './icons'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


createApp(App).component('v-icon', OhVueIcon).use(pinia).use(router).mount('#app')
