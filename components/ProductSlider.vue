<template>
  <div>
    <carousel
      :per-page-custom="[[768, 2], [1024, 3], [1536, 4]]"
      :touch-drag="false"
      :navigation-enabled="true"
      :pagination-enabled="false"
      :navigation-next-label="rightCaret"
      :navigation-prev-label="leftCaret"
      :mouse-drag="false"
    >
      <slide v-for="item in 12" :key="item">
        <ProductItem class="w-full overflow-hidden mb-10 mr-2" :product="product" :show-description="true" />
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: 'ProductSlider'
}
</script>
