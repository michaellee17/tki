<template>
  <layout-default>
    <TopHeader :title="'隱私權條款'"></TopHeader>
    <div class="container mt-5">
      <h5 class="mb-3">使用條款</h5>
      <p>Klook Travel Technology Limited（「Klook」、「我們」、「我們」、「我們的」）尊重及致力保障你的個人私隱資料，並遵守適用法律下的私隱資料保障原則及規條。</p>
      <p>當你使用本網站www.klook.com 及／或Klook App（合稱為 「Klook平台」）以及Klook或第三方營運商透過Klook平台（「營運商」）提供的服務（「服務」）時，我們可能按本隱私政策蒐集、處理、使用和揭露你的資料。本隱私政策中使用的「你」及「你的」包括瀏覽Klook平台或使用服務的任何人士。</p>
      <p>本隱私政策規定了Klook蒐集、處理、使用和/或揭露你在瀏覽Klook平台和/或使用服務時獲取的資料的依據和條款。這些資料可能包括連結至或與特定個人相關的個人資料，如姓名、住址、電話號碼、電子信箱、旅行證件資料、租車資訊、保險資訊、年齡、出生日期等或任何你按要求透過Klook平台提供的資料（「個人資料」）。</p>
      <p>請仔細閱讀本隱私政策。造訪Klook平台，即表示你同意本隱私政策的個人資料的蒐集、處理、使用和揭露。</p>
      <p>Klook有權更新、修訂或修正本《隱私保護政策》的條款或任何部分，且無須發出事前通知，若你繼續存取Klook平台或使用服務，即表示你接受更新、修訂或修正的《隱私保護政策》。若你不同意本《隱私保護政策》的所有條款與條件，及/或日後更新、修訂或修正的內容，你必須停止存取或以其他方式使用Klook平台及服務。</p>
      <p>因此，若你希望存取和檢視現行版本的《隱私保護政策》，請繼續閱讀此網頁。</p>
      <p>當你使用Klook平台時，我們可能蒐集你提供給我們的你個人相關資料，以及你如何使用Klook平台的資訊，包括你何時開設使用者帳戶（下稱「使用者帳戶」）、造訪Klook平台、預約、租賃及／或預訂任何想要的服務、或使用服務。</p>
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
    document.title = "隱私權條款 - T-KI";
  },
};
</script>
<style scoped>
p {
  letter-spacing: 1.6px;
}
</style>