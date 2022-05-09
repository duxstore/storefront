<template>
  <div>
    <!-- Secondary Menu -->
    <div class="bg-secondary-color flex flex-row h-11 justify-between row">
      <ul class="flex flex-row font-medium gap-5 items-center text-black text-sm">
        <li>
          <nuxt-link to="">
            About
          </nuxt-link>
        </li>
      </ul>
      <ul class="flex flex-row font-medium gap-5 items-center text-black text-sm">
        <li>
          <nuxt-link to="">
            Sign in
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="">
            Create account
          </nuxt-link>
        </li>
      </ul>
    </div>

    <!-- Primary Menu -->
    <div class="sticky top-11 border-b border-gray-200 flex flex-row h-16 items-center justify-between row">
      <div class="flex flex-col justify-start w-4/12">
        <nuxt-link to="/">
          <img src="~/assets/img/Vector-xs.png" alt="">
        </nuxt-link>
      </div>

      <!-- Collection Links -->
      <ul class="menu flex flex-row justify-between w-4/12">
        <li v-for="nav in menus" :key="nav.id">
          <nuxt-link :to="`/collections/${nav.shortname}`" class="hover:text-secondary-color">
            {{ nav.name }}
          </nuxt-link>
        </li>
      </ul>

      <!-- Cart, Accounts -->
      <div class="flex justify-end w-4/12">
        <ul>
          <li>
            <button class="flex flex-row items-center" @click.stop="toggleCartPage(true)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-gray-400 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span class="font-medium">0</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import CollectionService from '~/services/Collections'
export default {
  name: 'NavBar',
  data () {
    return {
      menus: []
    }
  },
  mounted () {
    this.collections()
  },
  methods: {
    ...mapMutations('cart', [
      'toggleCartPage'
    ]),
    async collections () {
      this.menus = await CollectionService.navbar(2)
    }
  }
}
</script>
