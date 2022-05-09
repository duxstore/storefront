<template>
  <div class="flex flex-row gap-40 justify-center my-10">
    <nuxt-link v-for="catalog in 4" :key="catalog" :to="{name: 'single-collection', params: {slug: catalog} }">
      <NuxtImg provider="cloudinary" src="ltgadjjyyndscyz4xw7x.jpg" height="250" />
      <h2 class="font-medium text-secondary-color text-center">Shoes</h2>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    design: {
      type: String,
      required: false,
      default: 'default'
    }
  },
  fetch () {
    //
  }
}
</script>
