import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?',
            name: 'page',
            component: () => import('./views/Page.vue'),
            props: true,
        },
        {
            path: '/pages',
            name: 'pages',
            component: () => import('./views/Pages.vue'),
            children: [
                {
                    path: '',
                    name: 'pages.list',
                    component: () => import('./views/PageList.vue'),
                },
                {
                    path: 'create',
                    name: 'pages.create',
                    component: () => import('./views/PageCreate.vue'),
                },
                {
                    path: ':index/edit',
                    name: 'pages.edit',
                    component: () => import('./views/PageEdit.vue'),
                    props: true,
                },
            ]
        },
    ]
});

export default router;