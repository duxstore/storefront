<template>
  <div class="grid 2xl:grid-cols-5 sm:grid-cols-4 grid-cols-1 gap-5">
    <div v-for="product in data" :key="product.id" class="h-full w-full mb-5">
      <nuxt-link :to="{ name: 'single-product', params: { slug: product.shortname } }" class="block">
        <div class="h-48 2xl:h-64 w-full overflow-hidden">
          <!--Products with multiple images should animate and rotate OR have a slider-->
          <img :src="product.media_library[0]" :alt="product.name">
        </div>
        <div class="px-1">
          <p class="leading-none my-1 text-black capitalize text-sm">
            {{ product.name }}
          </p>
          <div class="flex flex-row items-baseline space-x-5">
            <h2 class="capitalize flex flex-row font-body py-1 font-bold text-2xl">
              {{ product.discount || product.price | money }}
            </h2>
            <span v-if="product.discount && product.discount > 0" class="text-sm text-gray-800 line-through">{{ product.price | money }}</span>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import ProductService from '~/services/Products'

export default {
  name: 'ProductList',
  props: {
    limit: {
      type: Number,
      required: false,
      default: 15
    },
    items: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data () {
    return {
      products: []
    }
  },
  computed: {
    data () {
      if (this.items.length > 0) {
        return this.items
      } else {
        return this.products
      }
    }
  },
  mounted () {
    if (this.items.length === 0) {
      this.fetch()
    }
  },
  methods: {
    async fetch () {
      const query = {}
      this.products = await ProductService.index(query)
    }
  }
}
</script>
