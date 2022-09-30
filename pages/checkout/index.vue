<template>
  <div>
    <NuxtChild />
  </div>
</template>

<router>
{
  name: 'checkout'
}
</router>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CheckoutPage',
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
  mounted () {},
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
