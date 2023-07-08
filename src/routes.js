import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?',
            name: 'page',
            component: () => import('./components/Page.vue')
        },
        {
            path: '/create',
            name: 'create',
            component: () => import('./components/CreatePage.vue')
        },
    ]
});

export default router;