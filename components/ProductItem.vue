<template>
  <div>
    <nuxt-link :to="{name: 'single-product', params: { slug: product.shortname }}" :class="!showMeta ? 'block relative' : ''">
      <!-- Minimun image dimension: 480 x 480 -->
      <NuxtImg
        v-if="product.media_library"
        :src="media"
        provider="cloudinary"
        :height="imageHeight"
        :width="imageWidth"
        fit="fill"
      />
      <h2 :class="!showMeta ? 'absolute bg-primary-color bottom-0 flex font-semibold h-12 items-center justify-center px-3 text-center text-white w-full' : `my-3 text-2xl text-gray-800 font-semibold`">
        {{ product.name }}
      </h2>
      <p v-if="showMeta" data-subtitle class="mb-3 text-base uppercase text-gray-400">
        Subtitle for when displaying on landing pages
      </p>
    </nuxt-link>
    <div v-if="showMeta" class="mb-4">
      <span data-price class="text-primary-color text-base mb-2">{{ product.price | money }} - {{ 57200 | money }}</span>
      <p v-if="showDescription" class="text-sm font-normal text-inherit whitespace-pre-wrap leading-6">{{ product.description }}</p>
      <ProductVariation :show-color-only="showColorVariation" :hide-titles="true" :product="product" :show-label="true" />
    </div>
    <nuxt-link v-if="showMeta" :to="{name: 'single-product', params: {slug: product.shortname}}" class="hover:text-secondary-color text-primary-color font-medium border-b-4 border-primary-color">
      Shop now
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      required: false,
      default: () => {},
      type: Object
    },
    subtitle: {
      required: false,
      default: '',
      type: String
    },
    showDescription: {
      required: false,
      default: false,
      type: Boolean
    },
    showMeta: {
      required: false,
      default: true,
      type: Boolean
    },
    showColorVariation: {
      required: false,
      default: true,
      type: Boolean
    },
    imageHeight: {
      required: false,
      default: '360',
      type: String
    },
    imageWidth: {
      required: false,
      default: '360',
      type: String
    }
  },
  fetch () {},
  computed: {
    priceRange () {
      // map through the variations and find the lowest and highest price ranges
      return ''
    },
    plainDescription () {
      if (process.client) {
        const tmp = new DOMParser().parseFromString(this.product.description, 'text/html')
        // eslint-disable-next-line no-console
        console.log(tmp.documentElement.textContent, tmp, tmp.textContent)
        return tmp.documentElement.textContent || ''
      }

      return ''
    },
    media () {
      if (this.product) {
        const image = this.product.media_library ? this.product.media_library[0] : ''
        const url = image.split('commerce/')

        return url[1]
      }

      return false
    }
  },
  methods: {
    image () {
      const images = [
        'ggoyesqw5kseds2avb4s',
        'gxkmguysmhyn6pdflr0l',
        'hornyflava100ml_large',
        'o5kcprkhtvde4e5cbvml',
        'ggoyesqw5kseds2avb4s',
        'mens-category1',
        'ggoyesqw5kseds2avb4s',
        'wys8brtrn4oumm9ixh59',
        'ggoyesqw5kseds2avb4s',
        'horny_lemonade_large',
        'gxkmguysmhyn6pdflr0l'
      ]

      const image = Math.ceil(Math.random(0, 10) * 10)

      return images[image] || 'o5kcprkhtvde4e5cbvml'
    }
  }
}
</script>
