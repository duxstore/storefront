import Collections from '@/models/Collections'

const CollectionService = {
  async index (query) {
    return await Collections.params(query).get()
  },

  /**
   * Returns a list of collections belonging to the store
   * @param {number} productCount Least amount of product collection must have
   * @param {number} limit Total collection to return
   * @param {string} order Sort order of collections
   * @returns Collections
   */
  async list (productCount = 2, limit = 5, order = 'id') {
    return await Collections.params({ product_count: productCount }).limit(limit).orderBy(order).get()
  },

  /**
   * Find products attached to a collection with the slug
   * @param {string} collection A unique slug identifier
   *
   * @return Products
   */
  async products (collection) {
    const response = await Collections.find(collection)

    return response
    // return new Collections(response).include('products').get()
  }
}

export default CollectionService
