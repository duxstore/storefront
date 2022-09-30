import Vue from 'vue'
import CartService from '~/services/Carts'

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
    CartService.add(product)
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
  },

  setQuantity (state, payload) {
    const [productId, quantity] = payload
    const product = state.products.filter(product => product.id === productId).reduce(product => product)
    const index = state.products.indexOf(product)
    product.cart_variation.quantity = quantity
    state.products[index] = product

    Vue.set(state.products, index, product)

    // eslint-disable-next-line no-console
    console.log('index of product ', index, 'product', product)
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
  products: state => state.products,
  updatedTotal (state) {
    return state.products[0].cart_variation.quantity * state.products[0].price
  },
  /**
   * Returns the subtotal of the total items in cart without discount
   * @param {*} state
   * @returns
   */
  subtotal (state) {
    const value = utility.prices(state).reduce((a, b) => utility.isNum(a) + utility.isNum(b), 0)

    // eslint-disable-next-line no-console
    console.log('Called subtotal ', value)

    return value
  },
  /**
   * Returns the total price of items in the cart after subtracting the discount
   * @param {*} state
   * @returns
   */
  total (state) {
    const value = utility.discounts(state).reduce((a, b) => utility.isNum(a) + utility.isNum(b), 0)

    return value
  },
  /**
   * Returns the total discount for all items in cart
   * @param {*} state
   * @param {*} getters
   * @returns
   */
  discount (state, getters) {
    const value = utility.isNum(getters.subtotal) - utility.isNum(getters.total)

    return value
  }
}

const utility = {
  /**
   * Sums all the prices of products in the cart with their quantities
   * @param {Vuex} state Get the vuex state
   * @returns {Number} Total number
   */
  prices (state) {
    const value = state.products.map(product => product.price * product.cart_variation.quantity)

    return value
  },

  /**
   * Sums all the discounts of products in the cart with their quantities
   * @param {Vuex} state Get the vuex state
   * @returns {Number} Total number
   */
  discounts (state) {
    const value = state.products.map(product => product.discount * product.cart_variation.quantity)

    return value
  },
  isNum (number) {
    return isNaN(number) ? 0 : number
  }
}
