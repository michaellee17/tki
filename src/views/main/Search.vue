<template>
  <layout>
    <TopHeader :title="'「OOO」搜尋結果'"></TopHeader>
    <div class="container mt-5">
      <div class="d-flex gap-3 mb-4">
        <div class="icon-circle bg-primary d-flex justify-content-center align-items-center">
          <img src="../../assets/images/icons/icon_tuneshow.png" width="24" alt="">
        </div>
        <button type="button" class="button btn-outline-primaryA active">
          <img src="../../assets/images/icons/icon_locationshow.png" width="24" class="me-1" alt="">
          <span>台北市</span>
          <img src="../../assets/images/icons/icon_arrow_drop_downshow.png" width="14" class="ms-1" alt="">
        </button>
        <div>
          <select class="button btn-outline-primaryA active">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <select>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button type="button" class="button btn-outline-primaryA active">演唱會</button>
        <button type="button" class="button btn-outline-primaryA">音樂祭</button>
      </div>
      <div class="d-flex gap-4 flex-wrap mb-4">
        <div class="cardA bg-cover text-white position-relative">
          <div class="position-absolute bottom-0">
            <h4 class="fw-bold">楊丞琳</h4>
            <p>世界巡回演唱會</p>
          </div>
        </div>
        <div class="cardA bg-cover text-white position-relative">
          <div class="position-absolute bottom-0">
            <h4 class="fw-bold">楊丞琳</h4>
            <p>世界巡回演唱會</p>
          </div>
        </div>
        <div class="cardA bg-cover text-white position-relative">
          <div class="position-absolute bottom-0">
            <h4 class="fw-bold">楊丞琳</h4>
            <p>世界巡回演唱會</p>
          </div>
        </div>
        <div class="cardA bg-cover text-white position-relative">
          <div class="position-absolute bottom-0">
            <h4 class="fw-bold">楊丞琳</h4>
            <p>世界巡回演唱會</p>
          </div>
        </div> 
      </div>
      <div class="d-flex justify-content-center">
        <PaginationA/> 
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import TopHeader from "../../components/TopHeader.vue";
import PaginationA from "../../components/PaginationA.vue";

export default {
  components: {
    Layout, TopHeader, PaginationA
  },
  beforeCreate() {
    document.title = "搜尋結果 - T-KI";
  },
};
</script>
<style scoped lang="scss">
.cardA {
  width: 410px;
  height: 230px;
  border-radius: 20px;
  background-image: linear-gradient(180deg, #00000000 0%, #00000033 73%, #000000 100%), url('../../assets/images/products/concert4.jpg');
  @media(max-width: 576px) {
    width: 305px;
    height: 172px;
  }
  & .position-absolute {
    left: 1rem;
  }
}
.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>