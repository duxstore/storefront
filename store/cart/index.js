export const state = () => ({
  cartPage: false
})

export const mutations = {
  toggleCartPage (state, action) {
    state.cartPage = action

    if (window) {
      action === true ? window.document.body.classList.add('overflow-hidden') : window.document.body.classList.remove('overflow-hidden')
    }
  }
}

export const getters = {
  cartIsActive: state => state.cartPage
}
