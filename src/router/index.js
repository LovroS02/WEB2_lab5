import NotFound from '@/components/NotFound.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/wish-lists',
      name: 'wishLists',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/wish-lists/:id',
      name: 'wishList',
      component: () => import('../views/WishListView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'Not Found',
      component: NotFound
      ,
    }
  ],
})

export default router
