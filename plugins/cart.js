export default ({ app, router, route, store }, inject) => {
  app.router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    store.commit('cart/toggleCartPage', false)
    next()
  })
}
