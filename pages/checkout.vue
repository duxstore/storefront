<template>
  <div class="row my-40">
    <div class="flex flex-col justify-center items-center">
      <h4 class="text-center my-2 font-bold text-2xl">
        Checkout
      </h4>
      <form @submit.prevent="pay">
        <div class="w-3/5 md:w-9/12 mx-auto">
          <div class="card-type flex justify-between items-center my-5 ">
            <!-- <div class="visa-card">
              <img src="~/assets/visa-classic.svg" alt="">
            </div>
            <div class="visa-card">
              <img src="~/assets/mastercard.png" alt="">
            </div>
            <div class="visa-card">
              <img src="~/assets/paypal.svg" alt="">
            </div> -->
          </div>
        </div>
        <div class="mb-4 flex flex-col">
          <label for="Cardholder Name" class="text-charcoal-light-text text-xs font-semibold">Cardholder Name</label>
          <input id="Cardholder Name" v-model="cardHolderName" type="text" placeholder="Cardholder Name" class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3">
        </div>
        <div class="mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">Card Number</label>
          <div id="card-number" class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3" />
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label for="card-expiry" class="text-charcoal-light-text text-xs font-semibold">Card Expiry</label>
            <div id="card-expiry" class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3" />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label for="card-cvc" class="text-charcoal-light-text text-xs font-semibold">Card CVC</label>
            <div id="card-cvc" class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3" />
          </div>
        </div>

        <div class="flex flex-col mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">Residential country</label>
          <input v-model="residential_country" label="Country" type="text" placeholder="Enter your country here" class="text-dark-800 focus:ring-2 border-input border outline-none px-4 rounded text-sm bg-secondary-color-ash py-3">
        </div>

        <div class="flex flex-col mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">Residential address</label>
          <input v-model="residential_address" placeholder="Residential Address" type="text" class="text-dark-800 focus:ring-2 border-input border outline-none px-4 rounded text-sm bg-secondary-color-ash py-3">
        </div>

        <div class="flex flex-col mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">State/Province</label>
          <input v-model="residential_state" placeholder="State/Province" class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">Postal code</label>
          <input
            v-model="residential_postal_code"
            placeholder="Postal Code"
            type="text"
            class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3"
          >
        </div>

        <div class="flex flex-col align-center">
          <!-- Will need a UI to show saved cards -->
          <div class="flex flex-row items-center mb-1 w-full">
            <input id="remember_me" v-model="storeCard" type="checkbox" class="mr-2">
            <label class="text-charcoal-light-text text-xs font-medium" for="remember_me">Save my details for future purchases</label>
          </div>
        </div>
        <div class="mt-4">
          <div class="w-full">
            <button :disabled="busy" :action="pay" class="bg-primary-color w-full p-2 text-center text-base text-white block">
              {{ `Pay ${cartTotal}` }}
            </button>
            <label class="text-charcoal-light text-xs font-medium">We do not store your credit card details on our server.</label>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<router>
{
  name: 'checkout'
}
</router>

<script>
export default {
  name: 'CheckoutPage',
  data () {
    return {
      residential_address: '',
      residential_state: '',
      residential_country: '',
      residential_postal_code: '',
      cardHolderName: null,
      storeCard: false,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      intent: null,
      busy: false
    }
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements()
    },
    cartTotal () {
      const naira = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

      return naira.format(240000)
    }
  },
  mounted () {
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
    this.cardNumber = this.stripeElements.create('cardNumber', { style })
    this.cardNumber.mount('#card-number')
    this.cardExpiry = this.stripeElements.create('cardExpiry', { style })
    this.cardExpiry.mount('#card-expiry')
    this.cardCvc = this.stripeElements.create('cardCvc', { style })
    this.cardCvc.mount('#card-cvc')
  },
  beforeDestroy () {
    this.cardNumber.destroy()
    this.cardExpiry.destroy()
    this.cardCvc.destroy()
  },
  methods: {
    async pay () {
      this.busy = true
      this.intent = await this.$axios.get('/checkout/intent')
      // eslint-disable-next-line no-console
      console.log('Intent data ', this.intent)
      this.intent = this.intent.data

      const address = {
        address: this.residential_address,
        state: this.residential_state,
        country: this.residential_country,
        postal: this.residential_postal_code
      }

      this.$stripe.confirmCardSetup(this.intent.client_secret,
        {
          payment_method: {
            card: this.cardNumber,
            // We will have to create a billing address for users to use here.
            billing_details: Object.assign({}, { name: this.cardHolderName }, address)
          }
        }
      ).then((result) => {
        // eslint-disable-next-line no-console
        console.log('Payment result ', result)
        const paymentMethod = result.setupIntent.payment_method
        // retrieve information for the API from payment_intent
        this.$store.dispatch('buy/pay', [this.cardHolderName, paymentMethod, this.storeCard]).then((res) => {
          this.busy = false
          // Upon successful payment we will begin a queued job to created the zipped
          // folder containing the purchased items and email that to the user (on the backend)
          this.$toast.success('Your payment was successful, and your download link has been sent to your email.')
          // Reset the cart
          this.$store.commit('buy/setCart', [])
          this.$store.commit('buy/setCartTotal', 0)
          setTimeout(() => {
            this.$router.push('/')
            this.$toast.clear()
          }, 2000)
        }).catch((err) => {
          this.busy = false
          this.$toast.error(err)
        })
      }).catch((err) => {
        this.busy = false
        this.$toast.error(err)
      })
    }
  }
}
</script>
