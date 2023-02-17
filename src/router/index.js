import { createWebHistory, createRouter } from "vue-router";
import App from '@/App.vue'
import Menu from '@/components/Menu.vue'
import Visor from '@/components/Visor.vue'

const routes = [
    {
        path: "/:name?",
        name: "Home",
        component: Visor,
    },
    {
        path: "/menu",
        name: "Menu",
        component: Menu,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;