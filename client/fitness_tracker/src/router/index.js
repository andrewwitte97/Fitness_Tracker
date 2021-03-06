import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Friends from '../views/Friends.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  {
    
    
    path: '/about',  name: 'about',
    component: () => import('../views/About.vue')
  },


  
  { path: '/Friends', name: 'Friends',
    component: () => import('../views/Friends.vue')},

  {
    path: '/profile/:username',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  



  {
    path: '/excersize',
    name: '/excersize',
    component: () => import('../views/Excersize.vue')
  },

  {
    path: '/login',
    name: '/login',
    component: () => import('../views/Login.vue')
  },
  
  {
    path: '/signup',
    name: '/signup',
    component: () => import('../views/Signup.vue')
  },


]

const router = new VueRouter({
  routes
})

export default router