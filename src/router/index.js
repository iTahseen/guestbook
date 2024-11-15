import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/guestbook',
    name: 'guestbook',
    component: () => import('../views/GuestBookView.vue')
  },
  {
    path: '/uses',
    name: 'uses',
    component: () => import('../views/UsesView.vue')
  },
  {
    // Catch-all 404 - this will match any route not defined above
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404View.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const footer = document.querySelector('#footer');

  if (to.name === '404') {
    if (footer) footer.style.display = 'none';
  } else {
    if (footer) footer.style.display = 'block';
  }

  next();
});

export default router;
