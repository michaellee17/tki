<template>
  <layout>
    <TopHeader :title="'用戶服務條款'"></TopHeader>
    <div class="container mt-5">
      <h5 class="mb-3">使用條款</h5>
      <p>1. 您的協議</p>
      <p>1.1 此網站 www.klook.com 及／或 Klook App (「Klook平台」) 由Klook Travel Techonology Limited營運。使用此網站與及由Klook Travel Technology Limited及其關聯公司（合稱「Klook」）或第三方營運商（「營運商」）透過Klook平台所提供的服務（「服務」）前請先詳閱條款（「本《使用條款》」）。此條款中使用的「您」及「您的」包括 (1) 任何進入Klook平台的人及 (2) 任何透過您購買服務的人</p>
      <p>2. 《使用條款》變更</p>
      <p>請仔細閱讀本隱私政策。造訪Klook平台，即表示你同意本隱私政策的個人資料的蒐集、處理、使用和揭露。</p>
      <p>Klook有權更新、修訂或修正本《隱私保護政策》的條款或任何部分，且無須發出事前通知，若你繼續存取Klook平台或使用服務，即表示你接受更新、修訂或修正的《隱私保護政策》。若你不同意本《隱私保護政策》的所有條款與條件，及/或日後更新、修訂或修正的內容，你必須停止存取或以其他方式使用Klook平台及服務。</p>
      <p>因此，若你希望存取和檢視現行版本的《隱私保護政策》，請繼續閱讀此網頁。</p>
      <p>當你使用Klook平台時，我們可能蒐集你提供給我們的你個人相關資料，以及你如何使用Klook平台的資訊，包括你何時開設使用者帳戶（下稱「使用者帳戶」）、造訪Klook平台、預約、租賃及／或預訂任何想要的服務、或使用服務。</p>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import TopHeader from "../../components/TopHeader.vue";

export default {
  components: {
    Layout, TopHeader
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