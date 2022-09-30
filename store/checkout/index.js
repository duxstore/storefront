export const state = () => ({
  step: 0,
  products: []
})

export const mutations = {
  setStep (state, step) {
    state.step = step
  }
}

export const actions = {
  goToStep ({ commit }, step) {
    commit('setStep', step)
  }
}

export const getters = {
  step: state => state.step
}
