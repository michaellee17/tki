<template>
  <router-view :style="[getPrimaryColor]" />
  <transition-group name="showMenu">
    <QuickView v-if="$store.getters.modalIsQuickView" v-bind="getCurrentQuickViewProduct"/>
    <Modal v-if="$store.state.app.currentActiveModal === 'newsletter'"/>
  </transition-group>

  <div
    class="modal-background"
    v-if="$store.state.app.currentActiveModal !== ''"
    @click="$store.commit('forceCloseModal')"
  ></div>
</template>

<script>
import colors from "./views/color_schemes.json";
import QuickView from "./components/molecules/Modal/QuickView.vue"
import Modal from "./components/molecules/Modal/NewsLetterPopup.vue"
import {products} from "./data/auctions.json"
export default {
  components: {QuickView,Modal},
  created() {

    document.addEventListener('keydown', e => {
        let key = e.key;
        if (key && 'Escape' === key) {
            this.$store.commit('forceCloseModal')
        }
    }, false);

    if(document.cookie.indexOf('modal=true') === -1) {
      setTimeout(function() {
        this.$store.commit('toggleModal', 'newsletter');
      }.bind(this),3000)
    }

  },
  watch: {
    "$store.state.app.currentActiveModal": function() {
      let body = document.getElementsByTagName("BODY")[0];
      let modalsState = this.$store.state.app.currentActiveModal;
      if (modalsState !== "") {
        body.style.overflow = "hidden";
      } else {
        body.style.overflow = "auto";
      }
    },
  },
  data() {
    return {
      colors,
    };
  },
  computed: {
    getCurrentColor() {
      return process.env.VUE_APP_PRIMARY_COLOR === ""
        ? colors[process.env.VUE_APP_CURRENT_THEME]
        : process.env.VUE_APP_PRIMARY_COLOR;
    },
    getPrimaryColor() {
      return (
        "--primary-color:" +
        this.getCurrentColor +
        ";" +
        "--swiper-theme-color: " +
        this.getCurrentColor +
        ";"
      );
    },
    getCurrentQuickViewProduct() {
      return products.find((prod) => {
          return prod.id == this.$store.state.app.currentActiveModal.split('-')[1]
      })
    }
  },
};
</script>
<style src="./assets/main.css"></style>