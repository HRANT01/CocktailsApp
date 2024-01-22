import { createRouter, createWebHistory } from 'vue-router';

const validRouteNames = ['Margarita', 'Mojito',  'A1', 'Kir']

const routes = [
  { path: '/', redirect: '/Margarita' },
  { path: '/404', name: 'NotFound', component: () => import('../views/NotFound.vue') },
  { path: '/:cocktailCode', name: 'cocktail',
    component: () => import('../views/Cocktail.vue'),
    beforeEnter(to, from, next) {
      const cocktailName = to.params.cocktailCode;
      console.log(cocktailName, 'cocktailName')
      if (validRouteNames.includes(cocktailName)) {
        next();
      } else {
        next('/404');
      }
    }
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router