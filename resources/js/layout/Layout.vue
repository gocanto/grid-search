<template>
  <div>
    <top-bar></top-bar>

    <div class="lg:px-8 max-w-7xl mt-10 mx-auto px-4 sm:px-6">
      <products-list></products-list>
    </div>
  </div>
</template>

<script>
const TopBar = () => import('./TopBar');
const ProductsList = () => import('../components/ProductsList');

export default {
  components: {
    TopBar,
    ProductsList,
  },
}
</script>
