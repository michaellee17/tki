<template>
  <div class="wrap">
    <div class="container">
      <dropdown :items="internationalization.langs" />
    </div>
    <PageHeader />
    <div class="mb-100">
      <slot><div class="text-center">No content yet.</div> </slot>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../molecules/Footer/Footer.vue";
import Dropdown from "../../atoms/Menu/Dropdown.vue"
import PageHeader from "../PageHeader.vue";
import internationalization from "../../../data/internationalization.json";

export default {
  components: {
    Footer,
    PageHeader,
    Dropdown,
  },
  data() {
    return {
      internationalization,
    };
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
