<template>
  <div class="flex flex-col sm:flex-row justify-start sm:space-x-5">
    <div v-for="collection in collections" :key="collection.id" class="h-96 2xl:w-3/12 sm:w-4/12 w-full relative">
      <nuxt-link :to="{ name: 'single-collection', params: { slug: collection.shortname } }" class="absolute">
        <div class="h-full w-full overflow-hidden">
          <img :src="collection.media[0]" :alt="collection.name">
        </div>
        <h2 class="capitalize font-heading py-1 text-3xl">
          {{ collection.name }}
        </h2>
        <p class="leading-none my-0 text-gray-500 text-sm">
          {{ collection.products_count | count }} products
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CollectionService from '~/services/Collections'

export default {
  name: 'CollectionList',
  data () {
    return {
      collections: []
    }
  },
  async fetch () {
    this.collections = await CollectionService.list(0)
  },
  methods: {}
}
</script>
