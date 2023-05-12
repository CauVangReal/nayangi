import Vue from 'vue'
import VueRouter from 'vue-router'
//import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: '/',
  scrollBehavior(to, from, savedPosition) {
    if (to.matched.some(m => m.meta.disableScroll)) return

    const position = {
      x: 0,
      y: 0,
    }

    if (savedPosition) {
      position.x = savedPosition.x
      position.y = savedPosition.y
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(position)
      }, 400)
    })
  },
  routes: [
    {
      path: '',
      component: () => import('@/layouts/layout-vertical'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/components/pages/HelloWorld'),
          meta: {

          },
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import('@/components/pages/menu'),
          meta: {

          },
        },
      ],
    },
    // {
    //   path: '',
    //   component: () => import('../developer/layouts/main/FullPage'),
    //   children: [
    //     {
    //       path: '*',
    //       name: 'page-error-404',
    //       component: () => import('../developer/views/pages/Error404'),
    //       meta: {
    //         layout: 'full',
    //         rule: 'admin',
    //         title: 'Developer - Trang không tồn tại!',
    //       },
    //     },
    //   ],
    // },
  ],
})

export default router
