import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './components/Index';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Form from './components/Form'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'in',
        component: SignIn,
    },
    {
        path: '/home',
        name: 'home',
        component: index,
    },
    {
        path: '/sign-up',
        name: 'up',
        component: SignUp,
    },
    {
        path: '/add',
        component: Form,
    },
    {
        path: '/edit',
        name: 'edit',
        component: Form
    },

];

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.name !== 'in' && !localStorage.getItem('login')) next({ name: 'in' });
    else next();
});

export default router;
