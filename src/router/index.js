import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About Me'
    }
  },
  {
    path: '/mywork',
    name: 'Mywork',
    component: () => import('../views/MyWork.vue'),
    meta: {
      title: 'Past Work'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      title: 'Contact Me!'
    }
  },
  // {
  //   path: '/iamirene',
  //   name: 'Login',
  //   component: () => import('../views/Login.vue'),
  //   meta: {
  //     title: 'Hi Irene!'
  //   }
  // },
  // {
  //   path: '/ikindaforgot',
  //   name: 'Forgotpassword',
  //   component: () => import('../views/ForgotPassword.vue'),
  //   meta: {
  //     title: 'Recover my password!'
  //   }
  // },
  // {
  //   path: '/makenewadmin',
  //   name: 'Newadmin',
  //   component: () => import('../views/Register.vue'),
  //   meta: {
  //     title: 'Get Some Help'
  //   }
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Something Blooms`;
  next(); 
})

export default router
