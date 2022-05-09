<template>
  <div class="row">
    <div class="flex flex-row">
      <div class="w-5/12 max-h-screen">
        <div class="block max-h-screen sticky top-0">
          <NuxtImg
            :src="currentImage"
            provider="cloudinary"
            width="950"
            height="auto"
            fit="fill"
          />
        </div>
        <div class="mt-2 flex flex-row gap-4">
          <button v-for="item in image()" :key="item" :class="currentImage === item ? 'border-2 border-black' : '' " @click="setCurrentImage(item)">
            <NuxtImg
              :src="`${item}.jpg`"
              provider="cloudinary"
              width="100"
              height="80"
              fit="fill"
            />
          </button>
        </div>
      </div>
      <div class="w-7/12 bg-secondary-color px-40 py-20">
        <h2 class="my-3 text-2xl text-gray-800 font-semibold">
          {{ product.name }}
        </h2>
        <div class="my-3 flex flex-row gap-2">
          <p :class="`text-xl text-gray-800 ${product.discount > 1 ? ' line-through ' : ''}font-semibold`">
            {{ product.price | money }}
          </p>
          <p v-if="product.discount > 1" class="text-lg text-gray-400 font-normal">
            {{ product.discount | money }}
          </p>
        </div>
        <p class="leading-relaxed" v-html="product.description"></p>
        <p class="my-3 text-base uppercase text-gray-400">
          Subtitle for when displaying on landing pages
        </p>
        <div v-if="product.variant" data-variations>
          <div v-for="variation in product.variant" :key="variation.id" class="my-5">
            <p class="text-xl capitalize">
              {{ variation.type }}
            </p>
            <div class="mt-2 flex flex-row justify-items-auto gap-4">
              <button
                v-for="value in variation.values"
                :key="value"
                :style="{ borderRadius: variation.type === 'color' ? '100%' : '' }"
                :class="variation.type === 'color' ? `flex items-center justify-center h-11 w-11 border-primary-color hover:border-${value.toLowerCase()}-900 border-2` : `h-10 w-auto hover:bg-primary-color hover:text-white rounded-full leading-none bg-white text-secondary-color border-2 p-2 px-5`"
              >
                <span v-if="variation.type !== 'color'">
                  {{ value }}
                </span>
                <span
                  v-else
                  class="flex h-9 rounded-full w-9"
                  :style="{ backgroundColor: variation.type === 'color' ? value.toLowerCase() : '', borderRadius: variation.type === 'color' ? '100%' : '' }"
                />
              </button>
            </div>
          </div>
        </div>
        <!-- Add to cart button -->
        <button class="bg-primary-color w-full p-2 text-center text-base text-white my-10 block">
          Add to cart {{ product.discount || product.price | money }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from '~/services/Products'

export default {
  name: 'SingleProduct',
  data () {
    return {
      currentImage: this.image()[0],
      product: []
    }
  },
  async fetch () {
    this.product = await ProductService.find(this.shortname)
  },
  computed: {
    shortname () {
      return this.$route.params.slug
    }
  },
  methods: {
    setCurrentImage (image) {
      this.currentImage = image
    },
    image () {
      const images = [
        'ggoyesqw5kseds2avb4s',
        'gxkmguysmhyn6pdflr0l',
        'hornyflava100ml_large',
        'o5kcprkhtvde4e5cbvml'
      ]

      return images
    }
  }
}
</script>

<router>
{
  name: 'single-product',
  path: '/product/:slug'
}
</router>
