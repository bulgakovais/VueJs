import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from "../page/PageHome.vue";
import PageAbout from "../page/PageAbout.vue";
import PageDashboard from "../page/PageDashboard.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/dashboard/add/payment/Transport',
    name: 'Dashboard',
    component: PageDashboard,
  },
  {
    path: '/dashboard/add/payment/Food',
    name: 'Dashboard',
    component: PageDashboard,
  },
  {
    path: '/dashboard/add/payment/Entertainment',
    name: 'Dashboard',
    component: PageDashboard,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: PageDashboard
  },
  {
    path: '/about',
    name: 'About',
    component: PageAbout
    //  () => import('../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
