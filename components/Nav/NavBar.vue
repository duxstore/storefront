<template>
  <div>
    <!-- Secondary Menu -->
    <div class="bg-black flex flex-row h-16 justify-between row">
      <ul class="flex flex-row font-medium gap-5 items-center text-white text-sm">
        <li>
          <nuxt-link to="">
            Get 25% discount on your first purchase
          </nuxt-link>
        </li>
      </ul>
      <ul class="flex flex-row font-medium gap-5 items-center text-sm text-white">
        <li>
          <nuxt-link to="">
            Help
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="">
            Buyer protection
          </nuxt-link>
        </li>
        <li>
          <p class="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="flex w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            +2349020043524
          </p>
        </li>
      </ul>
    </div>

    <!-- Primary Menu -->
    <div class="sticky top-11 border-b border-bold-grey flex flex-row h-16 items-center justify-between row">
      <div class="border-bold-grey border-r flex flex-col h-full justify-center w-1/12 pr-5">
        <nuxt-link to="/">
          <img src="~/assets/img/Vector-xs.png" alt="">
        </nuxt-link>
      </div>

      <!-- Search bar -->
      <ul class="border-bold-grey border-r flex flex-row h-full items-center justify-between menu w-6/12">
        <li class="h-full w-full">
          <div class="flex flex-row h-full items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="search" class="border-none h-full outline-none w-full" placeholder="Search...">
          </div>
        </li>
      </ul>

      <!-- Cart, Accounts -->
      <ul class="flex h-full items-center flex-row justify-end w-4/12 h-full">
        <!--Cart button link -->
        <li class="px-5 border-bold-grey border-r flex h-full items-center">
          <button class="flex flex-row items-center relative" @click.stop="toggleCartPage(true)">
            <span class="-top-2 absolute bg-blend-screen bg-red-100 font-medium h-4 left-3 rounded-full text-xs w-4">{{ cartCount }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span class="font-medium px-3">Cart</span>
          </button>
        </li>
        <!--End cart button -->

        <!--Collection link -->
        <li class="px-5 border-bold-grey border-r flex h-full items-center">
          <nuxt-link to="/collections" class="flex flex-row items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            <span class="font-medium px-3">Collection</span>
          </nuxt-link>
        </li>
        <!--End Collection link -->
        <!--Account button -->
        <li class="px-5 border-bold-grey border-r flex h-full items-center">
          <nuxt-link to="/collections" class="flex flex-row items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
            </svg>
            <span class="font-medium px-3">Account</span>
          </nuxt-link>
        </li>
        <!--End account button -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import CollectionService from '~/services/Collections'
export default {
  name: 'NavBar',
  data () {
    return {
      menus: []
    }
  },
  computed: {
    ...mapGetters('cart', [
      'cartCount'
    ])
  },
  mounted () {
    // this.collections()
  },
  methods: {
    ...mapMutations('cart', [
      'toggleCartPage'
    ]),
    async collections () {
      this.menus = await CollectionService.list(2)
    }
  }
}
</script>
