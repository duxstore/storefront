<template>
  <div class="row my-10">
    <!-- <h2>Home</h2> -->
    <!-- Little teaser -->
    <!-- <div class="flex flex-row gap-40 justify-center items-center">
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
    </div> -->

    <!--Collections-->
    <section class="my-3 sm:my-5">
      <CollectionList />
    </section>

    <!-- Slider 1: (e.g most viewed recently) Featured products on the landing page -->
    <section class="my-10 sm:my-32">
      <div class="flex flex-row justify-between">
        <h2 class="font-body mb-5 text-2xl text-left">
          Latest products
        </h2>
        <nuxt-link class="hover:underline text-black" :to="{ name: 'products' }">
          view all
        </nuxt-link>
      </div>
      <ProductList :limit="15" />
    </section>

    <!--Collections-->
    <section class="my-3 sm:my-5">
      <CollectionList />
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

<style scoped>
    .VueCarousel-navigation-button
  {
    border: 2px solid !important;
    @apply block border-2 border-primary-color cursor-pointer h-10 opacity-100 rounded-full w-10;
  }

  .VueCarousel-slide
  {
    @apply px-5
  }

  .VueCarousel-navigation
  {
    @apply -top-20 absolute right-10;
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
