import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Auth from './libs/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: () => import('./components/Index.vue')},
    {
      path: '/home',
      component: () => import('./components/Home.vue'),
      meta: {needLogin: true}
    },
    {
      path: '/entry/:entryId',
      component: () => import('./components/EditEntry.vue'),
      meta: {needLogin: true}
    },
    {
      path: '/e/:entryId',
      component: () => import('./components/ReadEntry.vue')
    },
    {path: '/error', component: () => import('./components/Error.vue')},
    {path: '/not_found', component: () => import('./components/NotFound.vue')},
    {path: '/:pathMatch(.*)', component: () => import('./components/NotFound.vue')}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.needLogin) && !Auth.getStatus().isLoggedIn) {
    return next({path: '/', query: {redirect: to.fullPath}})
  }
  
  next()
})

const app = createApp(App)
app.use(router)
app.mount('#app')
