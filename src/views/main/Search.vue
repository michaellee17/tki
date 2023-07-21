<template>
  <layout>
    <TopHeader :title="'「OOO」搜尋結果'" />
    <div class="container mt-5">
      <div class="d-flex gap-3 mb-4">
        <div class="icon-circle bg-primary d-flex justify-content-center align-items-center">
          <img src="../../assets/images/icons/icon_tuneshow.png" width="24" alt="">
        </div>
        <div>
          <div class="select">
            <select>
              <template v-for="country in countries" :key="country.id">
                <option :value="country.name">{{ country.name }}</option>
              </template>
            </select>
          </div>
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
        <PaginationA /> 
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import TopHeader from "../../components/TopHeader.vue";
import PaginationA from "../../components/PaginationA.vue";
import { countries } from "../../data/gc/countries.json";

export default {
  components: {
    Layout, TopHeader, PaginationA
  },
  data () {
    return {
      countries: countries
    }
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

/* select custom style  */
select {
  color: #fff;
  appearance: none;
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding: 0 10px 0 30px;
  width: 100%;
  cursor: inherit;
}
select::-ms-expand {
  display: none;
}
.select {
  background-color: var(--primary-color);
  border-radius: 28px;
  width: 100%;
  min-width: 165px;
  padding: 0.4rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: grid;
  grid-template-areas: "select";
  align-items: center;        
}
.select::after {
  content: "";
  width: 14px;
  height: 7px;
  background-color: #fff;
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  justify-self: end;
}
.select::before {
  content: "";
  width: 24px;
  height: 100%;
  background-image: url(../../assets/images/icons/icon_locationshow.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  justify-self: start;
}
select,
.select:after, .select:before {
  grid-area: select;
}
</style>