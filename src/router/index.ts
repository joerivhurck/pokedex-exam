import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: '/pokemon/:name',
          name: 'pokemonDetails',
          component: () => import('@/views/DetailsView.vue')
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: () => import('@/views/FavoritesVieuw.vue')
        }
      ]
    }
  ]
})

export default router
