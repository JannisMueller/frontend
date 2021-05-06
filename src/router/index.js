import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/login',
        component: Login,
        name: 'Login'
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import('@/views/Learn.vue')
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('@/views/Quiz.vue')
  },
  {
    path: '/references',
    name: 'References',
    component: () => import('@/views/References.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// Användaren får komma åt /quiz om hen har loggat in eller registrerat ett konto.
// TODO: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards https://router.vuejs.org/guide/advanced/meta.html

