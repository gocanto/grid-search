<template>
  <span></span>
</template>

<script>
const cache = new Map()
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  async mounted() {
    await this.fetchIcon()
  },
  watch: {
    async name() {
      await this.fetchIcon()
    },
  },
  methods: {
    async fetchIcon() {
      const path = `/images/svg/${this.name}.svg`
      if (!cache.has(path)) {
        try {
          cache.set(
              path,
              fetch(path).then(r => r.text())
          )
        } catch (e) {
          cache.delete(path)
        }
      }
      if (cache.has(path)) {
        this.$el.innerHTML = await cache.get(path)
      }
    },
  },
}
</script>