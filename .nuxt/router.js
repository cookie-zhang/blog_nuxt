import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _472dd4a4 = () => interopDefault(import('../pages/article/_id.vue' /* webpackChunkName: "pages/article/_id" */))
const _e515eec2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _519c226c = () => interopDefault(import('../pages/index/_id.vue' /* webpackChunkName: "pages/index/_id" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/article/:id?",
    component: _472dd4a4,
    name: "article-id"
  }, {
    path: "/",
    component: _e515eec2,
    name: "index",
    children: [{
      path: ":id?",
      component: _519c226c,
      name: "index-id"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
