<template>

  <b-pagination
      :per-page="perPage"
      :total-rows="totalRows"
      first-number
      last-number
      pills
      v-model="currentPage"
      :align="align"
  >
    <template v-slot:prev-text>
      <svg-icon class="text-secondary"
                name="dashboard/cancellation_requests/icon-chevron_left"/>
    </template>
    <template v-slot:next-text>
      <svg-icon class="text-secondary"
                name="dashboard/cancellation_requests/icon-chevron_right"/>
    </template>
  </b-pagination>

</template>

<script>
import SvgIcon from "./SvgIcon";
export default {
  name: 'paginate',
  components: {SvgIcon},
  props: {
    perPage: Number,
    totalRows: Number,
    value: Number,
    align: {
      type: String,
      validator: (val) => ['start', 'left', 'center', 'end', 'right', 'fill'].includes(val),
      default: 'left',
    },
  },
  data() {
    return {
      currentPage: this.value,
    }
  },
  watch: {
    currentPage(newValue) {
      this.$emit('input', newValue)
    },
  }
}
</script>