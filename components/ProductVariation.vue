<template>
  <div v-if="product.variant" data-variations>
    <div v-for="variation in variants" :key="variation.id" class="my-5">
      <p v-if="!hideTitles" class="text-xl capitalize">
        {{ variation.type }}
      </p>
      <div class="mt-2 flex flex-row justify-items-auto gap-4">
        <button
          v-for="value in variation.values"
          :key="value"
          :style="{ borderRadius: variation.type === 'color' ? '100%' : '' }"
          :class="variation.type === 'color' ? `flex items-center justify-center h-11 w-11 border-primary-color hover:border-${value.toLowerCase()}-900 border-2` : `h-10 w-auto hover:bg-primary-color hover:text-white rounded-full leading-none bg-white text-secondary-color border-2 p-2 px-5`"
        >
          <span v-if="variation.type !== 'color'">
            {{ value }}
          </span>
          <span
            v-else
            class="flex h-9 rounded-full w-9"
            :style="{ backgroundColor: variation.type === 'color' ? value.toLowerCase() : '', borderRadius: variation.type === 'color' ? '100%' : '' }"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: false,
      default: () => {}
    },
    showColorOnly: {
      type: Boolean,
      required: false,
      default: () => false
    },
    hideTitles: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  computed: {
    variants () {
      if (this.showColorOnly) {
        return this.product.variant.filter(variant => variant.type === 'color')
      }

      return []
    }
  }
}
</script>
