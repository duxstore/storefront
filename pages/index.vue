<template>
  <div class="row my-40">
    <!-- <h2>Home</h2> -->
    <!-- Little teaser -->
    <div class="flex flex-row gap-40 justify-center items-center">
      <div v-for="teaser in 3" :key="teaser" class="flex flex-row gap-2 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="bg-secondary-color h-14 p-4 rounded-full w-14"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <div class="flex flex-col justify-center">
          <h2 class="font-bold mb-2 text-2xl">
            Turn on notifications
          </h2>
          <p class="text-sm">
            Stay notified when we have new orders
          </p>
        </div>
      </div>
    </div>

    <!-- Catalog items: A header text and 4 catalog items -->
    <section class="my-10 sm:my-40">
      <h2 class="text-center text-2xl font-bold">
        Every Corner of Your House
      </h2>
      <div>
        <CatalogItem />
      </div>
    </section>

    <!-- Slider 1: (e.g most viewed recently) Featured products on the landing page -->
    <section class="my-10 sm:my-40">
      <h2 class="text-center text-2xl font-bold mb-5 xl:mb-20">
        New Stock Alert
      </h2>
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
    </section>

    <!-- Featured Category 1 -->
    <section class="mx-auto">
      <div class="grid grid-cols-12 gap-x-6 gap-y-6 items-start">
        <div class="2xl:col-span-5 2xl:col-start-7 col-span-12 items-center max-w-full xl:col-span-6 xl:order-last">
          <div class="h-full px-7 xl:px-9 lg:px-12 pt-10 py-6 xl:pt-7 lg:pt-10 xl:py-2 2xl:px-12 flex flex-col space-y-md xl:space-y-6 lg:space-y-7 2xl:space-y-6 justify-center max-w-full text-white bg-primary-color">
            <div class="flex flex-col items-start space-y-4 md:space-y-3">
              <h2 class="text-xl md:text-2xl tracking-normal md:tracking-normal font-serif font-bold text-inherit my-0 md:text-h3 lg:text-2xl">
                Household Faves
              </h2>
              <p class="">
                The Paddington Bed Base is a beauty. Made from recycled polyester including plastic bottles and sourced from sustainable timber, put your head back and rest comfortably knowing that you’ve made the right choice for you and the environment.
              </p>
              <nuxt-link to="/" class="inline-block hover:text-secondary-color mb-4 text-white font-medium border-b-4 border-secondary-color">
                Buy this collection
              </nuxt-link>
            </div>
            <img src="https://images.ctfassets.net/uvwd10ivtduz/6xROkM3MgHXs5kFRtJwRUz/3289bbe5dd6898acc3c6654bedd5091c/T00461_AU_Paddington_bedbaseQueenAU_Queen_Eucalyptus_17101.jpg??w=828&h=466&q=75&fit=fill&fm=webp" />
          </div>
        </div>
        <div class="2xl:col-start-2 col-span-12 xl:col-span-6 2xl:col-span-5 max-w-full h-full">
          <div class="h-full grid grid-cols-2 gap-x-6 gap-y-6 items-center">
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
          </div>
        </div>
      </div>
    </section>

    <!-- Slider 2: (e.g most bought) Featured products 2 on the landing page -->
    <section class="my-10 sm:my-40">
      <h2 class="text-center text-2xl font-bold mb-5 xl:mb-20">
        New Stock Alert
      </h2>
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
    </section>

    <!-- Featured Category 2 -->
    <section class="mx-auto">
      <div class="grid grid-cols-12 gap-x-6 gap-y-6 items-start">
        <div class="2xl:col-span-5 2xl:col-start-7 col-span-12 items-center max-w-full xl:col-span-6 xl:order-last">
          <div class="h-full px-7 xl:px-9 lg:px-12 pt-10 py-6 xl:pt-7 lg:pt-10 xl:py-2 2xl:px-12 flex flex-col space-y-md xl:space-y-6 lg:space-y-7 2xl:space-y-6 justify-center max-w-full text-white bg-primary-color">
            <div class="flex flex-col items-start space-y-4 md:space-y-3">
              <h2 class="text-xl md:text-2xl tracking-normal md:tracking-normal font-serif font-bold text-inherit my-0 md:text-h3 lg:text-2xl">
                Household Faves
              </h2>
              <p class="">
                The Paddington Bed Base is a beauty. Made from recycled polyester including plastic bottles and sourced from sustainable timber, put your head back and rest comfortably knowing that you’ve made the right choice for you and the environment.
              </p>
              <nuxt-link to="/" class="inline-block hover:text-secondary-color mb-4 text-white font-medium border-b-4 border-secondary-color">
                Buy this collection
              </nuxt-link>
            </div>
            <img src="https://images.ctfassets.net/uvwd10ivtduz/6xROkM3MgHXs5kFRtJwRUz/3289bbe5dd6898acc3c6654bedd5091c/T00461_AU_Paddington_bedbaseQueenAU_Queen_Eucalyptus_17101.jpg??w=828&h=466&q=75&fit=fill&fm=webp" />
          </div>
        </div>
        <div class="2xl:col-start-2 col-span-12 xl:col-span-6 2xl:col-span-5 max-w-full h-full">
          <div class="h-full grid grid-cols-2 gap-x-6 gap-y-6 items-center">
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
            <ProductItem :show-meta="false" image-width="360" image-height="390" :product="product" class="" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
  data () {
    return {
      product: {
        id: 16,
        store_id: 2,
        name: 'Pressire cooker',
        shortname: 'pressire-cooker-7923',
        price: 12900,
        discount: 1301,
        description: '<div>a cooker</div>',
        sku: 'Pressure',
        stock: 24,
        product_type: 'physical',
        status: 'published',
        collection_id: 61,
        category_id: null,
        media_library: [
          'https://res.cloudinary.com/tmp/image/upload/v1650765699/commerce/hl9xdjef0gvv8jser0ij.jpg'
        ],
        created_at: '2022-04-24T02:01:03.000000Z',
        updated_at: '2022-04-24T02:30:38.000000Z',
        views: '0',
        weight: 24,
        isbn: null,
        inventory: [],
        variant: [
          {
            id: 3,
            type: 'size',
            created_at: '2022-04-24T02:29:02.000000Z',
            updated_at: '2022-04-24T02:30:38.000000Z',
            product_id: 16,
            values: [
              'MD',
              'SM',
              'XS',
              'LG'
            ]
          },
          {
            id: 4,
            type: 'color',
            created_at: '2022-04-24T02:29:02.000000Z',
            updated_at: '2022-04-24T02:30:38.000000Z',
            product_id: 16,
            values: [
              'Yellow',
              'Red',
              'Brown',
              'Blue'
            ]
          }
        ],
        variant_inventory: [
          {
            variant: {
              size: 'MD',
              type: null,
              color: 'Yellow',
              material: null
            },
            stock: '23',
            price: 32300,
            media: '[]',
            created_at: '2022-04-24T02:29:02.000000Z',
            updated_at: '2022-04-24T02:29:02.000000Z',
            product_id: 16,
            id: 15
          },
          {
            variant: {
              size: 'SM',
              type: null,
              color: 'Red',
              material: null
            },
            stock: '4',
            price: 90200,
            media: '[]',
            created_at: '2022-04-24T02:29:02.000000Z',
            updated_at: '2022-04-24T02:29:02.000000Z',
            product_id: 16,
            id: 16
          },
          {
            variant: {
              size: 'XS',
              type: null,
              color: 'Brown',
              material: null
            },
            stock: '3',
            price: 54900,
            media: '[]',
            created_at: '2022-04-24T02:29:02.000000Z',
            updated_at: '2022-04-24T02:29:02.000000Z',
            product_id: 16,
            id: 17
          },
          {
            variant: {
              size: 'MD',
              type: null,
              color: 'Yellow',
              material: null
            },
            stock: '23',
            price: 32300,
            media: '[]',
            created_at: '2022-04-24T02:30:38.000000Z',
            updated_at: '2022-04-24T02:30:38.000000Z',
            product_id: 16,
            id: 18
          },
          {
            variant: {
              size: 'SM',
              type: null,
              color: 'Red',
              material: null
            },
            stock: '4',
            price: 90200,
            media: '[]',
            created_at: '2022-04-24T02:30:38.000000Z',
            updated_at: '2022-04-24T02:30:38.000000Z',
            product_id: 16,
            id: 19
          },
          {
            variant: {
              size: 'XS',
              type: null,
              color: 'Brown',
              material: null
            },
            stock: '3',
            price: 54900,
            media: '[]',
            created_at: '2022-04-24T02:30:38.000000Z',
            updated_at: '2022-04-24T02:30:38.000000Z',
            product_id: 16,
            id: 20
          },
          {
            variant: {
              size: 'LG',
              type: null,
              color: 'Blue',
              material: null
            },
            stock: '9',
            price: 12000,
            media: '[]',
            created_at: '2022-04-24T02:30:38.000000Z',
            updated_at: '2022-04-24T02:30:38.000000Z',
            product_id: 16,
            id: 21
          }
        ]
      }
    }
  },
  computed: {
    rightCaret () {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>`
    },
    leftCaret () {
      return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>`
    }
  }
}
</script>

<style>
  .VueCarousel-slide
  {
    @apply px-5
  }

  .VueCarousel-navigation
  {
    @apply -top-20 absolute right-10;
  }

  .VueCarousel-navigation-button
  {
    border: 2px solid !important;
    @apply block border-2 border-primary-color cursor-pointer h-10 opacity-100 rounded-full w-10;
  }

  .VueCarousel-navigation-prev
  {
    margin-right: 10px !important;
    left: -10px !important;
  }

  .VueCarousel-slide
  {
    user-select: auto !important;
  }
</style>
