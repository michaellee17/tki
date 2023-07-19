<template>
  <layout>
    <!-- 主要 slider -->
    <Slider class="mb-5"/>
    <div class="container">
      <HomeCardHot :title="'熱門活動'" :data="hotList" />
    </div>
    <!-- 次要 slider -->
    <SliderSecond class="mb-5" />
    <div class="container">
      <HomeCardReserve :title="'預約搶票'" :data="reserveList" />
      <div v-for="eventClass in classList" :key="eventClass.class_id">
        <HomeCardDefault
          v-if="typeList[eventClass.class_id] && typeList[eventClass.class_id].length > 0"
          :title="eventClass.class_name" :data="typeList[eventClass.class_id]" />
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
      classList:  [
        {
            "class_id": 2,
            "class_name": "遊樂園"
        },
        {
            "class_id": 1,
            "class_name": "演唱會"
        },
        {
            "class_id": 5,
            "class_name": "運動賽事"
        },
        {
            "class_id": 6,
            "class_name": "藝文展演"
        },
        {
            "class_id": 3,
            "class_name": "其他"
        }
      ],
      hotList: [],
      typeList: {},
      reserveList:[]
    }
  },
  created() {
    this.getHotList();
    this.getClassList();
    this.classList.forEach(item => this.getTypeList(item.class_id))
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
          return false
        }
      });
    },
    getClassList() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-district-class-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.classList = res.data.data;
        } else {
          return false
        }
      });
    },
    getTypeList(id) {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-district-main-list?class_id=${id}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.typeList[id] = res.data.data;
        } else {
          return false
        }
      });
    },
    getReserveList() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-reserve-main-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.reserveList = res.data.data;
          console.log(this.reserveList)
          return false
        }
      });
    },
  },
}
</script>

<style scoped lang="scss">

</style>