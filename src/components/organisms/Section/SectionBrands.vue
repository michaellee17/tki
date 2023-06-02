<template>
  <div class="section w-100 d-none">
    <div class="container">
    <Heading :title="'Shop By Brand'" />
    <SliderMultipleElements :items="partners" />
    </div>
  </div>
</template>

<script>
import {partners} from '../../../data/brandsPartners.json'
import Heading from "../../atoms/SectionHeading/Heading.vue";
import SliderMultipleElements from "../../atoms/Carousel/SliderMultipleElements.vue";

export default {
  components: {
    Heading,
    SliderMultipleElements,
  },
  data() {
    return {
      partners
    }
  }
};
</script>
<style scoped="scoped">
.container{
  background-color:#F9F9F9;
  width:100%;
}
</style>
