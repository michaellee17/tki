<template>
  <div class="wrap">
    <Navbar></Navbar>
    <div class="container" />
    <!-- <PageHeader v-if="!this.$store.state.appView.view" />   -->
    <div class="mb-100">
      <slot><div class="text-center">No content yet.</div> </slot>
    </div>
    <!-- <Footer v-if="!this.$store.state.appView.view" /> -->
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "../components/Navbar.vue"
// import Footer from "../../molecules/Footer/Footer.vue";
// import PageHeader from "../components/organisms/PageHeader.vue";

export default {
  data () {
    return {
      // internationalization,
      // appView: false
    }
  },
  mounted () {
    /* 給 app 的 web view */
    if (this.$store.state.appView.view) {
      this.$store.commit('changeAppView', false)
    }
    if (this.$route.query.isapp === 'true'){
      switch(this.$route.name) {
        case 'About':
        case 'FAQ': 
        case 'ServiceTerms':
        case 'PrivacyTerms':
        case 'Contact':
        case 'BuyTicketSeat':
          this.$store.commit('changeAppView', true)
          break;
      }
    }
  },
  components: {
    Navbar,
  },
};
</script>
<style scoped="scoped" lang="scss">
@import "../assets/mixin.scss";
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
// nav {
//   padding-top: 0px;
//   padding-bottom: 0px;
//   @include screen-sm {
//       padding-bottom: 20px;
//     }
//     & .navbar-nav {
//       @include screen-sm {
//         padding-top: 20px;
//       }
//     }
//   & .logo-image{
//     width: 90px;
//     @include screen-sm {
//       width: 70px;
//     }
//   }
//   & .nav-link {
//     color: #fff;
//     letter-spacing: 3px;  
//   }
//   & .nav-item {
//     padding-top: 20px;
//     padding-bottom: 20px;
//     @include screen-l {
//       padding-top: 5px;
//       padding-bottom: 5px;
//     }
//   }
//   & .login-dropdown {
//     padding-top: 20px;
//     padding-bottom: 20px;
//   }
//   .login-dropdown
//     & .dropdown-menu {
//     left: -100%;
//   }
//   & .dropdown-menu {
//     border: none;
//     margin-top: 0;
//     min-width: auto;
//     padding: 1.5rem 1rem;
//     opacity: 0.8;
//     & a {
//       letter-spacing: 3px;
//     }
//     & .dropdown-item:hover, .dropdown-item:focus {
//       color: var(--primary-color);
//       background-color: transparent;
//     }
//   }
// }
// .search-wrap {
//   position: relative;
//   @include screen-sm {
//     flex-basis: 100%;
//   }
// }
// .search-input {
//   outline: 0;
//   border: 0;
//   border-radius: 24px;
//   padding: 5px 35px 5px 15px;
//   width: 200px;
//   line-height: 35px;
//   color: var(--primary-color);
//   @include screen-sm {
//     width: 100%;
//   }
// }
// .search-icon {
//   position: absolute;
//   right: 1rem;
//   top: 50%;
//   transform: translateY(-50%);
//   color: var(--primary-color);
// }
</style>
