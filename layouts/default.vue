<template>
  <div :class="{ 'overflow-hidden': cartIsActive }">
    <div :style="{ filter: cartIsActive ? 'blur(2px)' : '', cursor: cartIsActive ? 'pointer' : '' }" @click.stop="toggleCartPage(false)">
      <div v-if="cartIsActive" class="w-6/12 z-50 h-screen left-0 absolute top-0 bg-black opacity-10" />
      <nav-bar />
      <div class="row my-4 breadcrumb">
        Home / Products / Single
      </div>
      <Nuxt />
      <Footer />
    </div>
    <cart v-if="cartIsActive" class="backdrop-blur-3xl bg-white fixed h-screen right-0 top-0 w-11/12 xl:w-9/12 2xl:w-6/12 z-50 overflow-y-scroll" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'DefaultTemplate',
  computed: {
    ...mapGetters('cart', [
      'cartIsActive'
    ])
  },
  methods: {
    ...mapMutations('cart', [
      'toggleCartPage'
    ])
  }
}
</script>
