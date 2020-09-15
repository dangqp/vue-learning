import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../view/Login.vue'
import BlogDetail from '../view/BlogDetail.vue'
import BlogEdit from '../view/BlogEdit.vue'
import Register from '../view/Register'
Vue.use(VueRouter)

const routes = [
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Login',
        redirect: '/login'
        // redirect: {name: 'Blogs'}
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/blogs',
        name: 'Blogs',
        // 懒加载
        component: () => import('../view/Blogs.vue')
    },
    {
        path: '/blog/add', // 注意放在 path: '/blog/:blogId'之前
        name: 'BlogAdd',
        meta: {
            requireAuth: true
        },
        component: BlogEdit
    },
    {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: BlogDetail
    },
    {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        meta: {
            requireAuth: true
        },
        component: BlogEdit
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router