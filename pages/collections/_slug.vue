<template>
  <div class="row">
    <div v-if="type === 'simple'">
      <ProductList />
    </div>

    <div v-if="type === 'slides'">
      <!-- Slider 2: (e.g most bought) Featured products 2 on the landing page -->
      <section v-if="!$fetchState.pending" class="mb-10 sm:my-40">
        <carousel
          :per-page-custom="[[768, 2], [1024, 3], [1536, 4]]"
          :touch-drag="false"
          :navigation-enabled="true"
          :pagination-enabled="false"
          :navigation-next-label="rightCaret"
          :navigation-prev-label="leftCaret"
          :mouse-drag="false"
        >
          <slide v-for="product in products" :key="product.id">
            <ProductItem class="w-full overflow-hidden mb-10 mr-2" :product="product" :show-description="true" />
          </slide>
        </carousel>
      </section>

      <!-- Slider 2: (e.g most bought) Featured products 2 on the landing page -->
      <section v-if="!$fetchState.pending" class="mb-10 sm:my-40">
        <carousel
          :per-page-custom="[[768, 2], [1024, 3], [1536, 4]]"
          :touch-drag="false"
          :navigation-enabled="true"
          :pagination-enabled="false"
          :navigation-next-label="rightCaret"
          :navigation-prev-label="leftCaret"
          :mouse-drag="false"
        >
          <slide v-for="product in products" :key="product.id">
            <ProductItem class="w-full overflow-hidden mb-10 mr-2" :product="product" :show-description="true" />
          </slide>
        </carousel>
      </section>

      <section v-if="$fetchState.pending" class="mb-10 sm:my-40 animate-pulse">
        <ProductItem class="w-full overflow-hidden mb-10 mr-2" :product="[]" :show-description="true" />
      </section>
    </div>
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
    this.products = await CollectionService.products(this.collection)
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
  path: '/collection/:slug'
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
