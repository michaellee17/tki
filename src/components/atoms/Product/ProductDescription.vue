<template>
  <div class="vendor-description d-flex flex-column text-secondary" v-html="description"></div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.vendor-description p {
  font-size: 16px;
  line-height: 160%;
}
</style>