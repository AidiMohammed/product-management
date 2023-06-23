import { createRouter, createWebHistory } from 'vue-router'

import pageNotFound from '../views/PageNotFound'
import createProduct from '../views/product/Create'
import editProduct from '../views/product/Edit'
import login from '../views/auth/Login'
import Dashboard from '../views/Dashboard'
import showProduct from '../views/product/Show.vue'
import profile from '../views/auth/Profile.vue'
import settings from '../views/Settings.vue'
import register from '../views/auth/Register.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:'/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/settings',
    name: 'settings',
    component: settings
  },
  {
    path: '/product/new',
    name: 'create-product',
    component: createProduct
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/product/edit/:id',
    name: 'edit-product',
    component: editProduct,
    props:true
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path:'/product-show',
    name: 'show-product',
    component: showProduct
  },
  {
    path:'/:catchAdll(.*)',
    component: pageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
