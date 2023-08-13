import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  routes: [
    { path: '/', name: 'Home', component: () => import('@views/HomeView.vue') },
    { path: '/sign-in', name: 'Login', component: () => import('@views/auth/LoginView.vue') },
    { path: '/sign-up', name: 'Signup', component: () => import('@views/auth/SignupView.vue') },
  ],
  history: createWebHashHistory(),

})

export default router