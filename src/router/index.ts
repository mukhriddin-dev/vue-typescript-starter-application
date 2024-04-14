import { createRouter, createWebHistory } from 'vue-router';
import { HomeWiew } from '@pages/index';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeWiew
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
