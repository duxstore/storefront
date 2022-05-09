<template>
  <div class="flex flex-row flex-wrap">
    <ProductItem v-for="item in 12" :key="item" class="mb-10 w-full md:w-1/3 xl:w-1/4 overflow-hidden" :show-description="false" />
  </div>
</template>

<script>
export default {}
</script>
