<template>
  <div>
    <h4>注意事項</h4>
    <div class="matter_content" v-html="matter_content"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('activity', ['matter_content']),
    }
  }
</script>

<style scoped>
.matter_content ul li {
    list-style: disc !important;
}
</style>