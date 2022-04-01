import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [
        {
            path: '/',
            component: import('./views/MainView.vue')
        },
        {
            path: '/login',
            component: import('./views/LoginView.vue')
        }, 
        {
            path: '/register',
            component: import('./views/RegisterView.vue')
        },
    ],
    history: createWebHistory()
});


export default router;