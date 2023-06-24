<template>
  <div class="container features-container ">
    <div class="row justify-content-around">
      <div class="col-md-3 col-12 feature-col">
        <Feature
          :image-src="'images/features/notification.png'"
          :title="'即時通知'"
          :subtitle="'手機推播通知功能，讓您無時無刻都能收到最新消息！'" />
      </div>
      <div class="col-md-3 col-12 feature-col ">
        <Feature
          :image-src="'images/features/ticket.png'"
          :title="'活動多樣'"
          :subtitle="'演唱會、展演、歌劇、音樂祭，各式各樣活動任您挑選！'" />
      </div>
      <div class="col-md-3 col-12 feature-col ">
        <Feature
          :image-src="'images/features/qr-code.png'"
          :title="'防偽數位票'"
          :subtitle="'防翻拍、防螢幕截圖的數位票，省去麻煩、驗票快速！'" />
      </div>
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
