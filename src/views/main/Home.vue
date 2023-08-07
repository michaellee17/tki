<template>
  <layout>
    <!-- 主要 slider -->
    <Slider class="mb-5" />
    <div class="container">
      <HomeCardHot :title="'熱門活動'" :data="hotList" />
    </div>
    <div class="position-relative">
      <!-- 次要 slider -->
      <SliderSecond class="mb-5" />
      <div class="oval bg-primary position-absolute" />
    </div>
    <div class="container">
      <HomeCardReserve :title="'預約搶票'" :data="reserveList" />
    </div>
    <div
      v-for="(eventClass, i) in classList" :key="eventClass.class_id" class="position-relative"
      :class="{ 'event-area': i !== classList.length - 1 }">
      <div class="event-bg position-absolute" />
      <div class="container ">
        <div>
          <HomeCardDefault
            v-if="typeList[eventClass.class_id] && typeList[eventClass.class_id].length > 0"
            :title="eventClass.class_name" :eng-title="toUppercase(eventClass.english_class_name)" :data="typeList[eventClass.class_id]" :index="eventClass.class_id" />
        </div>
      </div>
    </div>
    <!-- 一鍵回上方 -->
    <a
      ref="upButton" href="#" class="up-button d-none fs-2 position-fixed"
      @click.prevent="scrollUp">
      <font-awesome-icon
        :icon="['fas', 'chevron-circle-up']" />
    </a>
    <MessageModal ref="logoutSuccess" :success="true">
      <p class="mb-0">登出成功</p>
    </MessageModal>
  </layout>
</template>

<script>
import MessageModal from "../../components/gc/MessageModal.vue";
import Layout from "../../components/Layout.vue";
import Slider from "../../components/Slider.vue";
import SliderSecond from "../../components/Slider-second.vue";
import HomeCardHot from "../../components/HomeCardHot.vue";
import HomeCardDefault from "../../components/HomeCardDefault.vue";
import HomeCardReserve from "../../components/HomeCardReserve.vue";
import { mapState } from 'vuex';

export default {
  components: {
    MessageModal,
    Layout,
    Slider,
    SliderSecond,
    HomeCardHot,
    HomeCardDefault,
    HomeCardReserve,
    MessageModal
  },
  data () {
    return {
      classList: [],
      hotList: [],
      typeList: {},
      reserveList:[]
    }
  },
  computed: {
    // ...mapState('user', ['logoutMsg']),
  },
  watch: {
    // logoutMsg: {
    //   immediate: true,
    //   handler() {
    //     if(this.logoutMsg === true) {
    //       console.log('logout')
    //       this.$nextTick(() => {
    //         this.$refs.logoutSuccess.showModal()
    //       })
    //     }
    //   }
    // },
  },
  created() {
    this.getHotList();
    this.getClassList();
    this.getReserveList();
  },
  mounted() {
    if(localStorage.getItem('isLogout')){
      this.$refs.logoutSuccess.showModal();
      localStorage.removeItem('isLogout')
    }
    this.$nextTick(() => {
      window.addEventListener('scroll', this.showUpButton);
    })
  },
  unmounted() {
    window.removeEventListener('scroll', this.showUpButton);
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
      })
      .catch(error => {
          console.error('error occurred:', error);
      })
    },
    getClassList() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-district-class-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.classList = res.data.data;
          this.classList.forEach(item => this.getTypeList(item.class_id))
        } else {
          return false
        }
      })
      .catch(error => {
          console.error('error occurred:', error);
      })
    },
    getTypeList(id) {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-district-main-list?class_id=${id}`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.typeList[id] = res.data.data;
        } else {
          return false
        }
      })
      .catch(error => {
          console.error('error occurred:', error);
      })
    },
    getReserveList() {
      this.axios.get(`${process.env.VUE_APP_PATH}/event/get-reserve-main-list`)
      .then(res => { 
        if (res.data.status_code === 'SYSTEM_1000') {
          this.reserveList = res.data.data;
          return false
        }
      })
      .catch(error => {
          console.error('error occurred:', error);
      })
    },
    scrollUp() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    },
    showUpButton() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        this.$refs.upButton.classList.remove('d-none');
      } else {
        this.$refs.upButton.classList.add('d-none');
      }
    },
    toUppercase(param) {
      return param.toUpperCase();
    },
  },
}
</script>

<style scoped lang="scss">
.oval {
  width: 100%;
  height: 320px;
  border-radius: 50% / 0 0 100% 100%;
  top: 99%;
  z-index: -1;
  @media(max-width: 576px) {
    height: 180px;
  }
}
.up-button {
  bottom: 2%;
  right: 1%;
  z-index: 100;
  &:hover {
    color: var(--secondary-color);
  }
}
.event-bg {
  background-color: #F5742E0F;
  width: 100%;
  height: 240px;
  top: 50%;
}
.event-area{
  margin-bottom: 100px;
}
</style>