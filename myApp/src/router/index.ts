import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PageOne from '../views/PageOne.vue';
import PageTwo from '../views/PageTwo.vue';
import PageThree from '../views/PageThree.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/pageOne',
    name: 'pageOne',
    component: PageOne
  },
  {
    path: '/pageTwo',
    name: 'pageTwo',
    component: PageTwo
  },
  {
    path: '/pageThree',
    name: 'pageThree',
    component: PageThree
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
