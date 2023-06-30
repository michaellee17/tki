<template>
  <div class="wrap">
    <div class="container">
      <dropdown :items="internationalization.langs"></dropdown>
    </div>
    <PageHeader />
    <div class="mb-5">
      <slot><div class="text-center">No content yet.</div> </slot>
    </div>
    <Footer class="mt-5"/>
  </div>
</template>

<script>
import Footer from "../../molecules/Footer/Footer.vue";
import Dropdown from "../../atoms/Menu/Dropdown.vue"
import PageHeader from "../PageHeader.vue";
import internationalization from "../../../data/internationalization.json";

export default {
  data() {
    return {
      internationalization,
    };
  },
  name: "Home",
  components: {
    Footer,
    PageHeader,
    Dropdown,
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
</style>
