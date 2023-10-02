import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import HomeView from '../views/Index.vue'
import LoginView from '../views/Login.vue'
import RegisterView from '../views/Register.vue'
import ComunidadView from '../views/Comunidad.vue'
import TorneosView from '../views/Torneos.vue'
import AcercaView from '../views/Acerca.vue'
import SoporteView from '../views/Soporte.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
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
    component: RegisterView,
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
    component: ComunidadView,
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
    component: TorneosView
  },
  {
    path: '/acerca',
    name: 'acerca',
    component: AcercaView
  },
  {
    path: '/soporte',
    name: 'soporte',
    component: SoporteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
