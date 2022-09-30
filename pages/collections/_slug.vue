<template>
  <div class="row">
    <ProductList :items="products" />
  </div>
</template>

<script>
import CollectionService from '~/services/Collections'

export default {
  name: 'SingleCollection',
  layout: 'default',
  data () {
    return {
      type: 'slides',
      products: []
    }
  },
  async fetch () {
    const response = await CollectionService.products(this.collection)
    this.products = response.products
    // eslint-disable-next-line no-console
    console.log('Requtrned products ', response, this.products)
  },
  computed: {
    collection () {
      return this.$route.params.slug
    },
    rightCaret () {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>`
    },
    leftCaret () {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>`
    }
  }
}
</script>

<router>
{
  name: 'single-collection',
  path: '/collections/:slug'
}
</router>

<style>
  .VueCarousel-slide
  {
    @apply px-5
  }

  .VueCarousel-navigation
  {
    @apply -top-20 absolute right-10;
  }

  .VueCarousel-navigation-button
  {
    border: 2px solid !important;
    @apply block border-2 border-primary-color cursor-pointer h-10 opacity-100 rounded-full w-10;
  }

  .VueCarousel-navigation-prev
  {
    margin-right: 10px !important;
    left: -10px !important;
  }

  .VueCarousel-slide
  {
    user-select: auto !important;
  }
</style>
