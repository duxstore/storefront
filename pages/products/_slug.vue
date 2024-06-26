<template>
  <div v-if="!$fetchState.pending" class="row">
    <div class="flex flex-col sm:flex-row">
      <div class="w-5/12 max-screen">
        <div class="block max-screen sticky top-0">
          <carousel
            :per-page-custom="[[768, 1], [1024, 1], [1536, 1]]"
            :touch-drag="true"
            :navigation-enabled="false"
            :pagination-enabled="true"
            :navigation-next-label="rightCaret"
            :navigation-prev-label="leftCaret"
            :mouse-drag="true"
            :per-page="1"
          >
            <slide v-for="(image, i) in images" :key="i">
              <!--<NuxtImg
                :src="image"
                provider="cloudinary"
                width="auto"
                height="1500"
                fit="fill"
              />-->
              <img :src="image" alt="">
            </slide>
          </carousel>
        </div>
      </div>
      <div class="2xl:px-40 2xl:py-20 bg-secondary-color sm:px-10 sm:py-5 px-5 py-5 w-7/12">
        <h2 class="font-medium my-3 2xl:text-4xl sm:text-2xl text-xl text-gray-800">
          {{ product.name }}
        </h2>
        <div class="my-3 flex flex-row gap-2">
          <p :class="`font-medium text-3xl text-gray-800 ${product.discount > 1 ? ' line-through ' : ''}font-semibold`">
            {{ product.price | money }}
          </p>
          <p v-if="product.discount > 1" class="font-medium text-3xl text-gray-400">
            {{ product.discount | money }}
          </p>
        </div>
        <!-- Product description -->
        <p class="font-normal whitespace-pre-wrap text-md" v-html="description"></p>

        <!-- Variation options -->
        <ProductVariation :product="product" :show-label="true" @setVariation="setCartVariation" />

        <!-- Add to cart button -->
        <button class="bg-primary-color w-full p-2 text-center text-base text-white my-10 block" @click="addToCart">
          <span>
            Add to cart {{ product.discount || product.price | money }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import { isEqual } from 'lodash'
import ProductService from '~/services/Products'
export default {
  name: 'SingleProduct',
  data () {
    return {
      product: [],
      cart_variation: {},
      cart_properties: []
    }
  },
  async fetch () {
    this.product = await ProductService.find(this.shortname)
    // We need to add this any product instance
    // before adding it to cart so that calculations can work
    const price = this.product.price
    const qty = this.product?.cart_variation?.quantity || 1
    const discount = this.product.discount || false
    let discounted = false

    discounted = discount * qty

    const total = price * qty

    Vue.set(this.product, 'total', total)
    Vue.set(this.product, 'discounted', discounted)
  },
  computed: {
    colorVariationBaseCSS () {
      return 'flex items-center justify-center h-11 w-11 hover:border-primary-color border-2'
    },
    sizeVariationBaseCSS () {
      return 'h-10 w-auto hover:bg-primary-color hover:text-white rounded-full leading-none text-secondary-color border-2 p-2 px-5 bg-white'
    },
    ...mapGetters('cart', {
      cartProducts: 'products'
    }),
    inCart () {
      if (this.cartProducts.length > 0) {
        return this.cartProducts.filter(product => product.id === this.product.id).length > 0
      }

      return false
    },
    shortname () {
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
    },
    images () {
      if (this.product && this.product.media_library && this.product.media_library.length) {
        // return this.product.media_library.map(image => image.split('/')[8])
        return this.product.media_library
      }
      const images = [
        'ggoyesqw5kseds2avb4s',
        'gxkmguysmhyn6pdflr0l',
        'hornyflava100ml_large',
        'o5kcprkhtvde4e5cbvml'
      ]

      return images
    },
    description () {
      return this.product.description
    }
  },
  methods: {
    /**
     * If this product is in cart, we want to
     * fetch its variations, qty, etc
     */
    getCartValues () {
      this.$store.dispatch('cart/fetchProduct', this.product.id).then((result) => {
        this.cart_properties = result
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log('Cart properties: ', err)
      })
    },
    setCartVariation ({ type, value }) {
      Vue.set(this.cart_variation, type, value)
    },
    addToCart () {
      if (this.inCart) {
        // If product in cart, we want to check if we should increase the quantity
        // or add a new entry with different variations
        this.beforeAddToCart()
      } else {
        // If product is not in cart, add it for the first time
        this.product.cart_variation = this.cart_variation
        this.product.cart_variation.quantity = 1
        this.product.quantity = 1
        this.$store.commit('cart/addToCart', this.product)
      }
    },
    beforeAddToCart () {
      const product = this.cartProducts.filter(product => product.id === this.product.id)
      const variation = product.cart_variation

      if (isEqual(this.cart_variation, variation)) {
        // The same variation so we increment the qty
        this.$store.commit('cart/setQuantity', this.product.id)
      } else {
        this.product.cart_variation = this.cart_variation
        this.cart_variation = {}
        this.product.cart_variation.quantity = 1
        this.$store.commit('cart/addToCart', this.product)
      }
    },
    setCurrentImage (image) {
      this.currentImage = image
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

<style>
  .VueCarousel-navigation-button
  {
    border: 2px solid !important;
    @apply block border-2 border-primary-color cursor-pointer h-10 opacity-100 rounded-full w-10;
  }

  .VueCarousel-pagination
  {
    @apply absolute bg-black bg-opacity-60 bottom-0 flex h-10 items-center justify-center
  }

  .VueCarousel-pagination button, .VueCarousel-pagination div.VueCarousel-dot-container
  {
    @apply py-0 my-0 !important
  }

  .VueCarousel-navigation-prev
  {
    margin-right: 10px !important;
    left: -10px !important;
  }

</style>
