<template>
  <layout-default>
    <TopHeader :title="'關於我們'"></TopHeader>
    <div class="container">
      <p class="intro fs-5">T-KI 致力於打造最專業、最順暢的購票平台，希望帶給使用者最棒的服務體驗。不再連不上售票網站；不再為了在機器前排隊數小時，不論在學校、公司、家裡、通勤中，只要在電腦前、手機旁，連著網路，就能在開賣的第一時間，上來買票！</p>
      <section class="row text-center justify-content-center gap-5 mb-5">
        <div class="col-12 col-md-3">
          <div class="feature-outline mb-4 mx-auto border border-primary d-flex justify-content-center align-items-center">
            <div class="bg-primary feature-wrap d-flex justify-content-center align-items-center">
              <h3 class="text-white mb-0">售票</h3>
            </div>
          </div>
          <div>
            <p>提供方便、快速完成購票流程</p>
            <p>建立安全購票機制之平台</p>
            <p>提供多元的支付方式</p>
            <p>電子票券機制</p>
          </div>
        </div>
        <div class="col-12 col-md-3">
          <div class="feature-outline mb-4 mx-auto border border-primary d-flex justify-content-center align-items-center">
            <div class="bg-primary feature-wrap d-flex justify-content-center align-items-center">
              <h3 class="text-white mb-0">互動</h3>
            </div>
          </div>
          <p>PP推播通知</p>
          <p>活動資訊分享</p>
          <p>提供問卷資訊，以達貼近消費者</p>
          <p>辦理抽獎、競賽等活動</p>
        </div>
        <div class="col-12 col-md-3">
          <div class="feature-outline mb-4 mx-auto border border-primary d-flex justify-content-center align-items-center">
            <div class="bg-primary feature-wrap d-flex justify-content-center align-items-center">
              <h3 class="text-white mb-0">抽獎</h3>
            </div>
          </div>
          <div>
            <p>提升黏著度</p>
            <p>有趣與豐富的活動</p>
            <p>建立品牌知名度</p>
            <p>創造營銷價值</p>
          </div>
        </div>
      </section>  
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import TopHeader from "../../components/TopHeader.vue";

export default {
  components: {
    LayoutDefault, TopHeader
  },
  beforeCreate() {
    document.title = "關於我們 - T-KI";
  },
};
</script>
<style scoped lang="scss">
.intro {
  letter-spacing: 2px;
}
.feature-outline {
  border-radius: 50%;
  width: 159px;
  height: 159px;
}
.feature-wrap {
  width: 145px;
  height: 145px;
  border-radius: 50%;
  & h3 {
    letter-spacing: 3px;
  }
}
section p {
  letter-spacing: 1.6px;
  margin-bottom: 5px;
}
</style>