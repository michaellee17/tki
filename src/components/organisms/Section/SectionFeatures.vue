<template>
<div class="container features-container ">
  <div class="row">
    <div class="col-md-3 col-6 feature-col  ">
    <Feature
      :imageSrc="'images/features/deliveries.png'"
      :title="'Fastest Delivery'"
      :subtitle="'Efficiently unleash media'"
    /></div>
    <div class="col-md-3 col-6 feature-col ">
    <Feature
      :imageSrc="'images/features/money.png'"
      :title="'Instant Buying'"
      :subtitle="'Podcasting operational'"
    /></div>
    <div class="col-md-3 col-6 feature-col ">
    <Feature
      :imageSrc="'images/features/support.png'"
      :title="'Call Center'"
      :subtitle="'Completely synergize'"
    /></div>
    <div class="col-md-3 col-6 feature-col ">
    <Feature
      :imageSrc="'images/features/tracking.png'"
      :title="'Order tracking'"
      :subtitle="'Objectively empowered'"
    /></div>
  </div>
</div>
</template>

<script>
import Feature from "../../atoms/Characteristic/Characteristic.vue";

export default {
  components: {
    Feature,
  },
};
</script>
<style scoped="scoped">
 .feature-col{
      padding:0px!important;
    }
  @media screen and (max-width: 768px){
    .section-feature{
      display:block!important;
    }
    .feature{
      display:block!important;
    }
    .features-container{
      display:flex;
      justify-content:center!important;
    }
    :deep(.feature ){
      margin:10px!important;
      justify-content: center;
    }
  
  }
</style>
