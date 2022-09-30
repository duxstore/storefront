<template>
  <div class="row my-2 flex flex-row justify-between">
    <section class="my-3 sm:my-5 w-6/12">
      <div class="mb-7">
        <h2 class="font-bold font-inter text-3xl">
          Summary
        </h2>
        <p class="text-gray-400 text-sm font-semibold font-inter">
          Check your order summary and choose your payment
          and delivery methods
        </p>
      </div>
      <div class="border border-gray-300 p-10 rounded-2xl">
        <div v-for="product in products" :key="product.id" class="flex flex-row justify-between mb-5">
          <nuxt-link :to="{ name: 'single-product', param: { slug: product.shortname } }" class="flex flex-row space-x-4">
            <img :src="product.media_library[0]" :alt="product.name" class="border h-28 p-0.5 rounded-2xl">
          </nuxt-link>
          <div class="flex flex-col space-y-5 justify-center ml-5">
            <nuxt-link :to="{ name: 'single-product', param: { slug: product.shortname } }" class="flex flex-row space-x-4">
              <h5 class="font-bold font-inter text-base">
                {{ product.name }}
              </h5>
            </nuxt-link>
            <span class="flex flex-row space-x-2">
              <p class="font-bold font-inter text-base">{{ product.price | money }}</p>
              <span class="text-gray-300 text-xs font-medium">{{ product.discount | money }}</span>
            </span>
          </div>
          <span class="flex flex-col font-bold text-gray-400 text-sm justify-center">
            <p>42 UK - 45 US</p>
            <p>x {{ product.quantity }}</p>
          </span>
        </div>
      </div>
    </section>
    <section class="my-3 sm:my-5 w-4/12">
      <div class="mb-7">
        <h2 class="font-bold font-inter text-3xl">
          Payment methods
        </h2>
        <p class="text-gray-400 text-sm font-semibold font-inter">
          Select one of the available payment methods below to
          finish your checkout
        </p>
      </div>
      <div class="border border-gray-300 p-10 rounded-2xl">
        <div v-for="product in products" :key="product.id" class="flex flex-col">
          <div>
            <nuxt-link :to="{ name: 'single-product', param: { slug: product.shortname } }" class="flex flex-row space-x-4">
              <img :src="product.media_library[0]" :alt="product.name" class="border-2 h-28 rounded">
              <h5 class="font-bold font-inter">
                {{ product.name }}
              </h5>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<router>
  {
    name: 'checkout-pay'
  }
</router>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CheckoutPay',
  layout: 'checkout',
  data () {
    return {
      billing_address: '',
      billing_state: '',
      billing_country: '',
      billing_postal_code: '',
      cardHolderName: null,
      storeCard: false,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      intent: null,
      shipping_methods: []
    }
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements()
    },
    ...mapGetters('cart', [
      'products'
    ]),
    ...mapGetters('checkout', [
      'step'
    ]),
    cartTotal () {
      const money = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 2
      })

      return money.format(240000)
    }
  },
  mounted () {
    this.$store.commit('checkout/setStep', 2)
  },
  beforeDestroy () {},
  methods: {
    async pay () {
      this.busy = true
      this.intent = await this.$axios.get('/checkout/intent')
      this.intent = this.intent.data

      const address = {
        address: this.billing_address,
        state: this.billing_state,
        country: this.billing_country,
        postal: this.billing_postal_code
      }

      this.$stripe.confirmCardSetup(this.intent.client_secret,
        {
          payment_method: {
            card: this.cardNumber
          }
        }
      ).then(async (result) => {
        const paymentMethod = result.setupIntent.payment_method

        await this.$axios.post('/checkout/pay', {
          name: this.cardHolderName,
          payment_method: paymentMethod,
          billing_address: address,
          amount: this.cartTotal
        }).then((result) => {
          // eslint-disable-next-line no-console
          console.log('Payment was successful ', result)
        })
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log('An error occurred ', err)
      })
    },
    async getShippingMethods () {
      const methods = await this.$axios.get(`${this.storeUrl}/providers/delivery`)
      this.shipping_methods = methods
    }
  }
}
</script>
