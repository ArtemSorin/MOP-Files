import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue';
import About from './views/AboutPage.vue';
import Contact from './views/ContactPage.vue';

import NotFound from './components/NotFound.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/contact', name: 'Contact', component: Contact },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;