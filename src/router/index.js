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
  {
    // path: "*",
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      title: '404'
    }
  }

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
