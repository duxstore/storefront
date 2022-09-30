<template>
  <div class="row">
    <h2>All products</h2>
    <ProductList :items="products" />
  </div>
</template>

<script>
import ProductService from '~/services/Products'
export default {
  name: 'AllProducts',
  data () {
    return {
      products: []
    }
  },
  async fetch () {
    const response = await ProductService.index({})
    this.products = response
    // eslint-disable-next-line no-console
    console.log('Requtrned products ', response, this.products)
  }
}
</script>

<router>
  {
    name: 'products'
  }
</router>
