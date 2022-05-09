import Collections from '@/models/Collections'

const CollectionService = {
  async index (query) {
    return await Collections.params(query).get()
  },

  async navbar (productCount = 2) {
    return await Collections.params({ product_count: productCount }).limit(5).get()
  },

  products (collection) {
    return Collections.find(collection)
  }
}

export default CollectionService
