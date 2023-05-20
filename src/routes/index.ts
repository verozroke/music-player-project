import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    routes: [
        { path: '/', name: 'Home', component: () => import('@views/HomeView.vue') },
    ],
    history: createWebHashHistory(),

})

export default router