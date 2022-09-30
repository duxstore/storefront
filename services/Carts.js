import Carts from '~/models/Carts'

const CartService = {

  async index (query) {
    return await Carts.params(query).get()
  },

  async find (id) {
    return await Carts.find(id)
  },

  add (data) {
    const cart = new Carts(data)
    cart.save()
  }
}

export default CartService
