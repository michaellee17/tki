<template>
  <VueImageZoomer 
    :regular="imageUrl" 
    :zoom-amount="2" 
    img-class="img-fluid"
    :show-message="false"
    alt="TicketInfo">
    <img :src="imageUrl" img-class="img-fluid">
  </VueImageZoomer>
</template>

<script>
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css';

export default {
  components: {
    VueImageZoomer
  },
  props: ['imageUrl']
}

</script>