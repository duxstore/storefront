export const state = () => ({
  cartPage: false,
  products: []
})

export const mutations = {
  toggleCartPage (state, action) {
    state.cartPage = action

    if (window) {
      action === true ? window.document.body.classList.add('overflow-hidden') : window.document.body.classList.remove('overflow-hidden')
    }
  },

  addToCart (state, product) {
    state.products.push(product)
  },

  removeFromCart (state, index) {
    state.products.splice(index, 1)
  },

  increaseQuantity (state, productId) {
    const product = state.products.filter(product => product.id === productId).reduce(product => product)
    // eslint-disable-next-line no-console
    console.log(product)
    product.cart_variation.quantity += 1
  },

  decreaseQuantity (state, productId) {
    const product = state.products.filter(product => product.id === productId).reduce(product => product)
    product.cart_variation.quantity -= 1
  }
}

export const actions = {
  fetchProduct (state, productId) {
    // eslint-disable-next-line no-console
    console.log(state.products.filter(product => product.id === productId))
    return state.products.filter(product => product.id === productId)
  }
}

export const getters = {
  cartIsActive: state => state.cartPage,
  cartCount: state => state.products.length,
  products: state => state.products
}
