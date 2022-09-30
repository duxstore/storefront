export const state = () => ({
  customer: []
})

export const mutations = {
  setCustomer (state, customer) {
    state.customer = customer
  }
}

export const actions = {
  setCustomer ({ commit }, customer) {
    commit('setCustomer', customer)
  }
}

export const getters = {
  user: state => state.customer
}
