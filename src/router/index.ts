import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.user && store.getters.token) {
        next({ name: 'comunidad' }); // Redirige al panel si el usuario está autenticado
      } else {
        next(); // Permite el acceso a la página de inicio
      }
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.user && store.getters.token) {
        next({ name: 'comunidad' }); // Redirige al panel si el usuario está autenticado
      } else {
        next(); // Permite el acceso a la página de inicio
      }
    }
  },
  {
    path: '/comunidad',
    name: 'comunidad',
    component: () => import('../views/Comunidad.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.user && !store.getters.token) {
        next({ name: 'login' }); // Redirige al panel si el usuario está autenticado
      } else {
        next(); // Permite el acceso a la página de inicio
      }
    }
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: () => import('../views/Usuario.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.user && !store.getters.token) {
        next({ name: 'login' }); // Redirige al panel si el usuario está autenticado
      } else {
        next(); // Permite el acceso a la página de inicio
      }
    }
  },
  {
    path: '/torneos',
    name: 'torneos',
    component: () => import('../views/Torneos.vue')
  },
  {
    path: '/acerca',
    name: 'acerca',
    component: () => import('../views/Acerca.vue')
  },
  {
    path: '/soporte',
    name: 'soporte',
    component:  () => import('../views/Soporte.vue')
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component:  () => import('../views/Equipos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
