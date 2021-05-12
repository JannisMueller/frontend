import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from "@/views/Login"
// import firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
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
    component: () => import('@/views/Quiz.vue'),
    meta: {
      requiresAuth: true
    }
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
});

/*
router.beforeEach((to, from, next)  => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth) {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        next('/login');
      } else {
        next();
      }
    });
  } else if(!requiresAuth && to.path === '/login') {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next('/quiz');
      } else {
        next();
      }
    });
  } else if(!requiresAuth && to.path === '/signup') {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        next('/quiz');
      } else {
        next();
      }
    });
  } else {
    next();
  }
});
*/

export default router

