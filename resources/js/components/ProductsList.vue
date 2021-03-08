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

      <!-- start input search -->
      <b-row class="mb-3">
        <b-col cols="4">

          <b-input-group>

            <b-form-input type="text" placeholder="Search..." v-model="filter"></b-form-input>

            <b-input-group-append>
              <b-input-group-text>
                <b-icon icon="search" />
              </b-input-group-text>
            </b-input-group-append>
          </b-input-group>

        </b-col>
      </b-row>
      <!-- end input search -->

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
        >

          <template #cell(__thumbnails)="data">
            <div class="flex h-10 w-10">
              <img class="h-10 w-10 rounded-full" :src="data.item.logoLocation" alt="">
            </div>
          </template>

          <template #cell(__prices)="data">
            <div class="min-w-max">
              <div><span class="font-bold">Min:</span> {{ data.item.variableDenomPriceMinAmount }}</div>
              <div><span class="font-bold">Max:</span> {{ data.item.variableDenomPriceMaxAmount }}</div>
            </div>
          </template>

          <template #cell(__identifier)="data">
            <div class="min-w-max">
              <div><span class="font-bold">ID:</span> {{ data.item.id }}</div>
              <div><span class="font-bold">GVT-ID:</span> {{ data.item.gvtId }}</div>
            </div>
          </template>

          <template #cell(__description)="data">
            <b-dropdown id="dropdown-right" right text="Manage" variant="light" size="sm">
              <template #button-content>
                <b-icon
                    icon="search"
                    aria-hidden="true"
                ></b-icon>
                &nbsp;See More
              </template>

              <b-dropdown-item href="#" v-b-modal="`short-desc-modal-${data.item.id}`">Short Description</b-dropdown-item>
              <b-dropdown-item href="#" v-b-modal="`long-desc-modal-${data.item.id}`">Long Description</b-dropdown-item>
            </b-dropdown>

            <b-modal :id="`long-desc-modal-${data.item.id}`" :title="`[${data.item.name}] Long Description`">
              <div v-html="data.item.longDescription"></div>
            </b-modal>

            <b-modal :id="`short-desc-modal-${data.item.id}`" :title="`[${data.item.name}] Short Description`">
              <div v-html="data.item.shortDescription"></div>
            </b-modal>

            <b-modal :id="`metadata-modal-${data.item.id}`" :title="`[${data.item.name}] Metadata`">
              <div>Type: {{ data.item.__typename }}</div>
              <div>Voucher Type: {{ data.item.voucherTypeName }}</div>
            </b-modal>
          </template>

          <template #cell(__external)="data">
            <b-dropdown id="dropdown-right" right text="Manage" variant="info" size="sm">
              <template #button-content>
                <b-icon
                    icon="globe"
                    aria-hidden="true"
                ></b-icon>
                &nbsp;Profile
              </template>
              <b-dropdown-item target="_blank" :href="data.item.productUrl">See More</b-dropdown-item>
              <b-dropdown-item target="_blank" :href="data.item.orderUrl">New Order</b-dropdown-item>
            </b-dropdown>
          </template>

        </b-table>
      </b-overlay>
      <!-- end products list -->

    </b-container>

  </div>

</template>

<script>
const productsAPI = () => require('./../../mock/products.json').products

export default {
  data() {
    return {
      isPending: true,
      products: [],
      filter: null,
    }
  },

  created() {
    this.fetch()
  },

  methods: {
    fetch() {

      // -- simulates loading data.
      setTimeout(() => {
        this.products = productsAPI()
        this.isPending = false
      }, 1000)

    },
    fields() {
      return [
        {
          key: '__thumbnails',
          label: '',
        },
        {
          key: '__identifier',
          label: 'Identifier',
        },
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'productTitle',
          label: 'Title',
        },
        {
          key: 'productTagline',
          label: 'Tag Line',
        },
        // {
        //   key: 'logoLocation',
        //   label: 'Location',
        // },
        {
          key: '__prices',
          label: 'Price',
        },
        {
          key: '__description',
          label: 'Description',
        },
        {
          key: '__external',
          label: 'External',
        },
      ]
    },

    breadcrumb() {
      return [
        { text: 'Home', href: '#' },
        { text: 'Products', active: true, href: '#' },
      ]
    },
  }
}
</script>

<style>
tbody {
  font-size: small;
}
</style>