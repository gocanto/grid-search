<template>

  <div>
    <b-container fluid>
      <b-breadcrumb :items="breadcrumb()" class="text-xs bg-white pl-0" />

      <!-- start nav bar -->
      <b-navbar
          toggleable="sm"
          class="p-0 mb-3 row no-gutters align-items-center"
      >
        <b-navbar-brand href="#">
          <h1 class="h4 mb-0 text-truncate">
            Items
          </h1>
        </b-navbar-brand>
      </b-navbar>
      <!-- end nav bar -->

      <!-- start products list -->
      <b-overlay :show="isPending" rounded="sm">
        <b-table
            striped
            hover
            :items="products"
            head-variant="light"
            :fields="fields()"
            no-sort-reset
            show-empty
            sort-icon-left
            ref="table"
            stacked="sm"
            table-class="mb-0"
            bordered
            :filter="filter"
        ></b-table>
      </b-overlay>
      <!-- end products list -->

    </b-container>

  </div>

</template>

<script>
const productsAPI = () => require('./../../../public/api/products.json').products

export default {
  data() {
    return {
      // perPage: 10,
      // currentPage: 1,
      isPending: false,
      // editing: false,
      // totalRows: 0,
      // pageOptions: [10, 25, 50, 100],
      products: [],
      filter: null,
    }
  },
  created() {
    this.products = productsAPI()

    //@todo Activate the filter
    // this.filter = 'Game of Sultans'
  },

  methods: {
    fields() {
      return [
        {
          key: 'id',
          label: 'Id',
        },
        {
          key: 'gvtId',
          label: 'Gvt Id',
        },
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'productTagline',
          label: 'Tag Line',
        },
        {
          key: 'shortDescription',
          label: 'Short Desc',
        },
        {
          key: 'longDescription',
          label: 'Long Desc',
        },
        {
          key: 'logoLocation',
          label: 'Location',
        },
        {
          key: 'productUrl',
          label: 'Product URL',
        },
        {
          key: 'voucherTypeName',
          label: 'Voucher Type',
        },
        {
          key: 'orderUrl',
          label: 'Order URL',
        },
        {
          key: 'productTitle',
          label: 'Title',
        },
        {
          key: 'variableDenomPriceMinAmount',
          label: 'Price Min Amount',
        },
        {
          key: 'variableDenomPriceMaxAmount',
          label: 'Price Max Amount',
        },
        {
          key: '__typename',
          label: 'Type Name',
        },
      ]
    },

    breadcrumb() {
      return [
        { text: 'Home', href: '#' },
        {
          text: 'Products',
          active: true,
          href: '#',
        },
      ]
    },
  }
}
</script>