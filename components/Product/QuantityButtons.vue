<template>
  <div>
    <div class="flex flex-row gap-4 items-center">
      <button
        :class="size === 'sm' ? 'p-1' : 'p-2'"
        class="border-2 border-secondary-color hover:bg-opacity-5 hover:bg-primary-color rounded-full"
        @click="decrement">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="block h-5 text-primary-color w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
        </svg>
      </button>
      <span>{{ 'count ' + count }}</span>
      <span>{{ 'value ' + value }}</span>
      <button
        :class="size === 'sm' ? 'p-1' : 'p-2'"
        class="border-2 border-secondary-color hover:bg-opacity-5 hover:bg-primary-color rounded-full"
        @click="increment">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="block h-5 text-primary-color w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'sm',
      required: false
    },
    max: {
      type: Number,
      default: 10,
      required: false
    },
    value: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      if (this.quantity === this.max) {
        return
      }
      this.count++

      this.$emit('increment', this.count)
      this.$emit('value', this.value)
    },
    decrement () {
      if (this.count <= 1) {
        return
      }
      this.count--

      this.$emit('decrement', this.count)
      this.$emit('value', this.value)
    }
  }
}
</script>
