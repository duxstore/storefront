<template>
  <div>
    <CheckoutNav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'DefaultTemplate',
  computed: {
    ...mapGetters('checkout', [
      'step'
    ])
  },
  methods: {
    ...mapMutations('checkout', [
      'goToStep'
    ])
  }
}
</script>
