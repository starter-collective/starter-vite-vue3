import NProgress from 'nprogress'
import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { routes as autoRoutes, handleHotUpdate } from 'vue-router/auto-routes'

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_PATH),
  routes: setupLayouts(autoRoutes),
})

if (import.meta.hot) {
  handleHotUpdate(router)
}

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
