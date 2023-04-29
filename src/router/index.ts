import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ArticleItem from '../components/ArticleItem.vue';
import BlogsItem from '../components/BlogsItem.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')

    },
    {
      path: '/articles/:id',
      name: 'articleItem',
      component: ArticleItem,
    },
    {
      path: '/blogs/:id',
      name: 'blogsItem',
      component: BlogsItem,
    }
  ]
})

export default router
