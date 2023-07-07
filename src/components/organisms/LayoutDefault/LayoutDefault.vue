<template>
  <div class="wrap">
    <div class="container">
      <!-- <dropdown :items="internationalization.langs" /> -->
    </div>
    <!-- <PageHeader v-if="!this.$store.state.appView.view" /> -->
    <PageHeader/>
    <div class="mb-100">
      <slot><div class="text-center">No content yet.</div> </slot>
    </div>
    <!-- <Footer v-if="!this.$store.state.appView.view" /> -->
    <Footer />
  </div>
</template>

<script>
import Footer from "../../molecules/Footer/Footer.vue";
// import Dropdown from "../../atoms/Menu/Dropdown.vue"
import PageHeader from "../PageHeader.vue";
import internationalization from "../../../data/internationalization.json";

export default {
  data () {
    return {
      // internationalization,
      // appView: false
    }
  },
  // mounted () {
  //   console.log(this.$route.name, this.$store.state.appView.view, this.$store.state.user.loginStatus)
  //   if (this.$route.query.isapp === 'true'){
  //     switch(this.$route.name) {
  //       case 'About':
  //       case 'FAQ': 
  //       case 'ServiceTerms':
  //       case 'PrivacyTerms':
  //       case 'Contact':
  //       case 'BuyTicketSeat':
  //         this.$store.commit('changeAppView', 'true')
  //         console.log(this.$store.state.appView.view)
  //         break;
  //       default:
  //         this.$store.commit('changeAppView', 'false')
  //         break;
  //     }
  //   }
  // },
  components: {
    Footer,
    PageHeader,
  },
};
</script>
<style scoped="scoped">
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.navbar .mobile_only_icon_group {
  display: none;
  float: right;
}

.navbar-header .logo img {
  max-width: 85px;
}
.mb-100 {
  margin-bottom: 100px;
}
</style>
