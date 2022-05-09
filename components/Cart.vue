<template>
  <div>
    <div class="bg-secondary-color flex justify-between h-10 items-center">
      <h2 class="px-5 text-xl">
        Your cart (21)
      </h2>
      <button class="hover:bg-gray-200 mr-5 rounded text-2xl text-primary-color" @click="toggleCartPage(false)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="block h-5 text-primary-color w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Cart action button -->
    <div class="p-5 flex flex-row items-center">
      <nuxt-link to="/" class="text-primary-color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="block h-5 text-primary-color w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </nuxt-link>
      <nuxt-link to="/" class="hover:text-secondary-color flex flex-row text-primary-color font-medium border-b-2 border-primary-color">
        Back to shop
      </nuxt-link>
    </div>

    <!-- Cart main content  -->
    <div class="flex flex-row gap-1 justify-between">
      <div class="w-7/12">
        <!-- Product list -->
        <div v-for="item in 4" :key="item" class="border-b flex flex-row gap-5 items-start m-5 py-5 w-full">
          <nuxt-link :to="{name: 'single-product', params: { slug: 'item' }}" class="">
            <NuxtImg
              src="ggoyesqw5kseds2avb4s.jpg"
              provider="cloudinary"
              height="100"
              width="100"
              fit="fill"
            />
          </nuxt-link>
          <div class="flex flex-row justify-between w-full">
            <!-- Start product LHS -->
            <div class="">
              <nuxt-link :to="{name: 'single-product', params: { slug: 'item' }}" class="">
                <h2>
                  Nike Air Force 1
                </h2>
              </nuxt-link>
              <div class="my-2">
                <p class="font-medium text-sm">
                  Color: Burgundy
                </p>
                <p class="font-medium text-sm">
                  Size: King
                </p>
              </div>

              <!-- Start qty buttons -->
              <div class="flex flex-row gap-4 items-center">
                <button class="border-2 border-secondary-color hover:bg-opacity-5 hover:bg-primary-color p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="block h-5 text-primary-color w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                  </svg>
                </button>
                <span>2</span>
                <button class="border-2 border-secondary-color hover:bg-opacity-5 hover:bg-primary-color p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="block h-5 text-primary-color w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <!-- End qty buttons -->
            </div>

            <!-- Start product RHS -->
            <div class="flex flex-col items-end justify-between">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <div>
                <span data-price-list class="flex flex-col gap-1 text-right">
                  <span data-price class="text-primary-color line-through text-base">{{ 25000 | money }}</span>
                  <span data-price class="text-red-900 font-semibold text-base">{{ 12000 | money }}</span>
                  <span data-price class="text-primary-color text-base">({{ 4000 | money }}/item)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Checkout button, cart total -->
      <div class="bg-secondary-color h-1/2 mr-5 p-5 w-4/12">
        <h2 class="text-xl mt-3 mb-5">Order summary</h2>
        <div class="flex flex-col py-2 gap-3 border-b-2">
          <div class="flex flex-row justify-between">
            <span data-price class="text-primary-color font-medium text-sm">Subtotal</span>
            <span data-price class="text-primary-color font-medium text-sm">{{ 4000 | money }}</span>
          </div>
          <div class="flex flex-row justify-between">
            <span data-price class="text-red-800 font-medium text-sm">Discount</span>
            <span data-price class="text-red-800 font-medium text-sm">-{{ 14000 | money }}</span>
          </div>
          <div class="flex flex-row justify-between">
            <span data-price class="text-primary-color font-medium text-sm flex">Delivery to &nbsp;
              <button class="hover:text-secondary-color flex flex-row text-primary-color font-medium border-b-2 border-primary-color">Lag</button>
            </span>
            <span data-price class="text-primary-color font-medium text-sm">{{ 1000 | money }}</span>
          </div>
        </div>
        <div class="flex flex-row py-3 justify-between">
          <h2 class="text-lg font-semibold font-sans">Total</h2>
          <h2 class="text-lg font-semibold font-sans">{{ 23000 | money }}</h2>
        </div>
        <nuxt-link to="/checkout" class="bg-primary-color w-full p-2 text-center text-base text-white my-10 block">
          Checkout
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'CartPage',
  methods: {
    ...mapMutations('cart', [
      'toggleCartPage'
    ])
  }
}
</script>
