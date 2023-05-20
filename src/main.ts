import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import { createPinia } from 'pinia'
import { OhVueIcon } from "oh-vue-icons";
import './icons'

const pinia = createPinia()

createApp(App).component('v-icon', OhVueIcon).use(pinia).use(router).mount('#app')
