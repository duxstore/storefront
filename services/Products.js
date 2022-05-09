import Products from '~/models/Products'

const CollectionService = {
  async index (query) {
    return await Products.params(query).get()
  },

  async find (slug) {
    return await Products.find(slug)
  }
}

export default CollectionService
