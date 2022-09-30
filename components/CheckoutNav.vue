<template>
  <div class="font-inter flex items-center justify-between w-full border-b border-bold-grey">
    <!--Nav LHS-->
    <div class="w-6/12 sticky top-11 flex flex-row h-16 items-center row">
      <div class="border-bold-grey border-r flex flex-col h-6 justify-center pr-5">
        <nuxt-link to="/">
          <img src="~/assets/img/Vector-xs.png" alt="">
        </nuxt-link>
      </div>

      <!-- Search bar -->
      <ul class="flex flex-row h-full items-center justify-between menu w-6/12">
        <li class="w-full">
          <p class="font-semibold font-inter ml-3 text-gray-400 text-lg">
            Order overview
          </p>
        </li>
      </ul>
    </div>
    <!--Nav RHS-->
    <div class="w-6/12">
      <!-- Cart, Accounts -->
      <ul class="flex h-full items-center flex-row justify-end">
        <!--Cart button link -->
        <li v-for="step in steps" :key="step.label" class="px-5 flex h-full items-center">
          <!--
          - If you're the current step, we will disable your button
          - You will be marked as done if you're below the current step
          - If you're above the current step you'll be undone
          - If you're below the current step, clicking you will
          -->
          <nuxt-link :to="{ name: step.url }" :disabled="step.step === currentStep" :class="{ 'cursor-pointer': step.step === currentStep, 'flex items-center': true, 'opacity-70': step.step > currentStep }" @click="goToStep(step.step)">
            <span class="flex font-bold h-5 items-center justify-center rounded-full text-black text-xs w-5" :class="{ 'bg-gray-400': step.step > currentStep, 'bg-green-200': step.step <= currentStep }">
              <svg
                v-if="step.step <= currentStep"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-3 w-3"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <p v-else>
                {{ step.step }}
              </p>
            </span>
            <p class="font-bold ml-2 text-base">
              {{ step.label }}
            </p>
          </nuxt-link>
        </li>
        <!--End cart button -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      steps: [
        {
          label: 'Information',
          step: 1,
          url: 'checkout-information'
        },
        {
          label: 'Payment Details',
          step: 2,
          url: 'checkout-pay'
        },
        {
          label: 'Complete Order',
          step: 3,
          url: 'checkout-complete'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('checkout', {
      currentStep: 'step'
    })
  },
  methods: {
    ...mapActions('checkout', [
      'goToStep'
    ])
  }
}
</script>
