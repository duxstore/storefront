<template>
  <div class="row my-2 flex flex-row justify-between">
    <section class="my-3 sm:my-5 w-6/12">
      <div class="mb-7">
        <h2 class="font-bold font-inter text-3xl">
          Personal information
        </h2>
        <p class="text-gray-400 text-sm font-semibold font-inter">
          Please enter your information below to start your checkout
        </p>
      </div>
      <div class="border border-gray-300 p-10 rounded-2xl">
        <form @submit.prevent="handleForm" @keyup="data.errors.clear()">
          <div class="flex sm:flex-row flex-col justify-between mb-2">
            <div class="flex flex-col">
              <label class="mb-1 text-gray-500 text-sm" for="firstname">Firstname</label>
              <input id="firstname" v-model="data.firstname" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="text" placeholder="Please enter your firstname">
              <span v-if="data.errors.has('firstname')" class="text-sm text-red-500">
                {{ data.errors.get('firstname') }}
              </span>
            </div>
            <div class="flex flex-col">
              <label class="mb-1 text-gray-500 text-sm" for="lastname">Lastname</label>
              <input id="lastname" v-model="data.lastname" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="text" placeholder="Please enter your lastname">
              <span v-if="data.errors.has('lastname')" class="text-sm text-red-500">
                {{ data.errors.get('lastname') }}
              </span>
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <label class="mb-1 text-gray-500 text-sm" for="email">Email</label>
            <input id="email" v-model="data.email" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="email" placeholder="Please enter your email">
            <span v-if="data.errors.has('email')" class="text-sm text-red-500">
              {{ data.errors.get('email') }}
            </span>
          </div>
          <div class="flex flex-col mb-2">
            <label class="mb-1 text-gray-500 text-sm" for="phone">Phone</label>
            <input id="phone" v-model="data.phone" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="tel" placeholder="Please enter your phone number">
            <span v-if="data.errors.has('phone')" class="text-sm text-red-500">
              {{ data.errors.get('phone') }}
            </span>
          </div>
          <div class="flex flex-col mb-2">
            <label class="mb-1 text-gray-500 text-sm" for="address">Address</label>
            <input id="address" v-model="data.address" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="tel" placeholder="Please enter your home address">
            <span v-if="data.errors.has('address')" class="text-sm text-red-500">
              {{ data.errors.get('address') }}
            </span>
          </div>
          <div class="flex sm:flex-row flex-col justify-between mb-2">
            <div class="flex flex-col">
              <label class="mb-1 text-gray-500 text-sm" for="city">City</label>
              <input id="city" v-model="data.city" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="tel" placeholder="Please enter your city">
              <span v-if="data.errors.has('city')" class="text-sm text-red-500">
                {{ data.errors.get('city') }}
              </span>
            </div>
            <div class="flex flex-col">
              <label class="mb-1 text-gray-500 text-sm" for="state">State</label>
              <input id="state" v-model="data.state" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="tel" placeholder="Please enter your city">
              <span v-if="data.errors.has('state')" class="text-sm text-red-500">
                {{ data.errors.get('state') }}
              </span>
            </div>
          </div>
          <div class="flex flex-col mb-2">
            <label class="mb-1 text-gray-500 text-sm" for="country">Country</label>
            <input id="country" v-model="data.country" class="bg-gray-100 font-inter outline-none px-4 py-2 rounded-xl text-sm" type="tel" placeholder="Please enter your city">
            <span v-if="data.errors.has('country')" class="text-sm text-red-500">
              {{ data.errors.get('country') }}
            </span>
          </div>
          <div class="mt-4">
            <button type="submit" class="bg-black py-2 px-3 text-sm text-white font-inter">
              Submit
            </button>
            <input type="reset" class="py-2 px-3 text-sm cursor-pointer bg-white text-black font-inter border border-black" value="Reset">
          </div>
        </form>
      </div>
    </section>
    <section class="my-3 sm:my-5 w-5/12">
      <div class="mb-7">
        <h2 class="font-bold font-inter text-3xl">
          Shipping
        </h2>
        <p class="text-gray-400 text-sm font-semibold font-inter">
          Available shipping methods
        </p>
      </div>
      <div class="p-10 rounded-2xl">
        <!--Shipping methods-->
        <div v-for="method in shipping_methods" :key="method">
          <img :src="method.name" alt="">
          <div>
            <h2 class="font-semibold text-base font-inter">
              {{ method.name }}
            </h2>
            <p>{{ method.description }}</p>
          </div>
          <div>
            <div>
              <h2 class="text-sm font-semibold font-inter">
                Price
              </h2>
              <span class="h-4 w-4 bg-black p-3 border border-black" />
            </div>
          </div>
        </div>
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
  </div>
</template>

<router>
  {
    name: 'checkout-information'
  }
</router>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'checkout',
  data () {
    return {
      products: [],
      data: this.$form({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        country: '',
        address: '',
        promotionals: true
      }),
      shipping_methods: []
    }
  },
  mounted () {
    this.$store.commit('checkout/setStep', 1)
    this.getShippingMethods()
  },
  methods: {
    async getShippingMethods () {
      const axios = this.$form({})
      this.shipping_methods = await axios.get('/providers/delivery')
    },
    handleForm () {
      this.data
        .post('/customers')
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res.data)
          this.$store.commit('customer/setCustomer', res.data)
        })
    }
  },
  ...mapGetters('cart', [
    'products'
  ]),
  ...mapGetters('checkout', [
    'step'
  ]),
  ...mapGetters('customer', [
    'user'
  ])
}
</script>
