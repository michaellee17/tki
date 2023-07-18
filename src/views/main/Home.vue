<template>
  <layout>
    <!-- 主要 slider -->
    <Slider class="mb-5" />
    <div class="container">
      <HomeCardHot :title="'熱門活動'" :data="hotList" />
    </div>
    <!-- 次要 slider -->
    <SliderSecond class="mb-5" />
    <div class="container">
      <HomeCardReserve :title="'預約搶票'" :data="reserveList" />
      <div v-for="eventClass in classList" :key="eventClass">
        <HomeCardDefault
          v-if="typeList[eventClass] && typeList[eventClass].length > 0"
          :title="eventClass" :data="typeList[eventClass]" />
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../../components/Layout.vue";
import Slider from "../../components/Slider.vue";
import SliderSecond from "../../components/Slider-second.vue";
import HomeCardHot from "../../components/HomeCardHot.vue";
import HomeCardDefault from "../../components/HomeCardDefault.vue";
import HomeCardReserve from "../../components/HomeCardReserve.vue";

export default {
  components: {
    Layout,
    Slider,
    SliderSecond,
    HomeCardHot,
    HomeCardDefault,
    HomeCardReserve
  },
  data () {
    return {
      classList: [ '演唱會', '運動賽事', '藝文展演', '其他' ],
      hotList: [],
      typeList: {},
      reserveList:[]
    }
  },
  created() {
    this.getHotList();
    this.classList.forEach(item => this.getTypeList(item))
    this.getReserveList();
    
  },
  beforeCreate() {
    document.title = "T-KI";
  },
  methods: {
    getHotList() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-hot-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.hotList = res.data.data ;
        } else {
          return
        }
      });
    },
    getTypeList(eventClass) {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-type-list?class_name=${eventClass}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.typeList[eventClass] = res.data.data;
        } else {
          return
        }
      });
    },
    getReserveList() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-reserve-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.reserveList = res.data.data ;
        } else {
          return
        }
      });
    },
  },
}
</script>