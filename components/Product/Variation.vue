<template>
  <div v-if="product.variant && product.variant.length" data-variations>
    <div v-for="variation in variants" :key="variation.id" class="my-5">
      <p v-if="!hideTitles" class="text-xl capitalize">
        {{ variation.type }}
      </p>
      <div class="mt-2 flex flex-row justify-items-auto gap-4">
        <button
          v-for="value in variation.values"
          :key="value"
          :style="{ borderRadius: variation.type === 'color' ? '100%' : '' }"
          :class="variation.type === 'color' ? colorVariationBaseCSS + (selected_variation[variation.type] === value ? ' border-primary-color ' : '') : sizeVariationBaseCSS + (selected_variation[variation.type] === value ? ' bg-primary-color ' : '')"
          @click="saveVariation(variation.type, value)"
        >
          <span v-if="variation.type !== 'color'" :class="`${selected_variation[variation.type] === value ? ' text-white' : ''}`">
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
  <div v-else>
    <h1>No variant length</h1>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'ProductVariation',
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
  data () {
    return {
      selected_variation: {}
    }
  },
  computed: {
    variants () {
      if (this.showColorOnly) {
        return this.product.variant.filter(variant => variant.type === 'color')
      }

      return this.product.variant
    },
    colorVariationBaseCSS () {
      return 'flex items-center justify-center h-11 w-11 hover:border-primary-color border-2'
    },
    sizeVariationBaseCSS () {
      return 'h-10 w-auto hover:bg-primary-color hover:text-white rounded-full leading-none text-secondary-color border-2 p-2 px-5 bg-white'
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log('Loaded')
  },
  methods: {
    saveVariation (type, value) {
      this.$emit('setVariation', { type, value })
      Vue.set(this.selected_variation, type, value)
    }
  }
}
</script>
