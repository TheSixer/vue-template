import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import Util from '@/libs/util'
import store from '@/store/index'

Vue.use(Router)

const RouterConfig = {
  mode: 'history',
  routes
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    Util.title(to.meta.title)
    next()
  }
})

router.afterEach(() => {

})

export default router
