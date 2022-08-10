<template>
  <div class="row my-40">
    <div class="flex flex-col justify-center items-center">
      <h4 class="text-center my-2 font-bold text-2xl">
        Checkout
      </h4>
      <form @submit.prevent="pay">
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
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">Billing country</label>
          <input v-model="billing_country" label="Country" type="text" placeholder="Enter your country here" class="text-dark-800 focus:ring-2 border-input border outline-none px-4 rounded text-sm bg-secondary-color-ash py-3">
        </div>

        <div class="flex flex-col mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">Billing address</label>
          <input v-model="billing_address" placeholder="Billing Address" type="text" class="text-dark-800 focus:ring-2 border-input border outline-none px-4 rounded text-sm bg-secondary-color-ash py-3">
        </div>

        <div class="flex flex-col mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">State/Province</label>
          <input v-model="billing_state" placeholder="State/Province" class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3" type="text">
        </div>

        <div class="flex flex-col mb-4">
          <label for="card-number" class="text-charcoal-light-text text-xs font-semibold">Postal code</label>
          <input
            v-model="billing_postal_code"
            placeholder="Postal Code"
            type="text"
            class="text-dark-800 focus:ring-2 border-input border  outline-none px-4 rounded text-sm bg-secondary-color-ash py-3"
          >
        </div>

        <div class="flex flex-col align-center">
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
      billing_address: '',
      billing_state: '',
      billing_country: '',
      billing_postal_code: '',
      cardHolderName: null,
      storeCard: false,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
      intent: null
    }
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements()
    },
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
    }
  }
}
</script>
