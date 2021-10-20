import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	meta: {
		title: 'Home'
	}
  },
  {
	  path: '/how-to',
	  name: 'HowTo',
	  component: () => import('../views/HowTo.vue'),
	  meta: {
	  	title: 'About'
	  }
  },
  {
  	  path: '/login',
  	  name: 'Login',
  	  component: () => import('../views/Login.vue'),
  	  meta: {
  	  	title: 'Login'
  	  }
  },
  {
  	  path: '/register',
  	  name: 'Register',
  	  component: () => import('../views/Register.vue'),
  	  meta: {
  	  	title: 'Register'
  	  }
  },
  {
  	  path: '/forget-password',
  	  name: 'ForgetPassword',
  	  component: () => import('../views/ForgetPassword.vue'),
  	  meta: {
  	  	title: 'ForgetPassword'
  	  }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


router.beforeEach((to, from, next) => {
	console.log(to)
	// This add title to browser
	document.title = `${to.name} | Fit4`;
	next();
})

export default router
