<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div class="row menu-mobile d-flex justify-content-around w-100 m-0 ">
    <link-wrapper :location="'/'" class="col-3 link-color border-end">
      <div class=" d-flex flex-column mobile-menu-item align-items-center  ">
        <span class="material-symbols-outlined p-2 icon-solid">other_houses</span>
        <span>首頁</span>
      </div>
    </link-wrapper>

    <link-wrapper :location="'/my-ticket'" class="col-3 link-color border-end">
      <div class="d-flex flex-column mobile-menu-item align-items-center">
        <span class="material-symbols-outlined p-2">book_online</span>
        <span>我的票券</span>
      </div>
    </link-wrapper>

    <link-wrapper :location="'/buy-ticket-list'" class="col-3 link-color border-end">
      <div class=" d-flex flex-column mobile-menu-item align-items-center ">
        <span class="material-symbols-outlined p-2">payments</span>
        <span>購票清單</span>
      </div>
    </link-wrapper>

    <link-wrapper :location="'/member'" class="col-3 link-color ">
      <div class="d-flex flex-column mobile-menu-item align-items-center">
        <!-- <font-awesome-icon class="fa-2x p-2 " :icon="['far', 'user-circle']" /> -->
        <span class="material-symbols-outlined p-2">account_circle</span>
        <span>會員中心</span>
      </div>
    </link-wrapper>
  </div>
</template>
<script>

import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";
export default {
  components: { LinkWrapper },
};
</script>

<style scoped="scoped">
.material-symbols-outlined{
  font-size: 2em;
}
.material-symbols-outlined.icon-solid {
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

a.col-3.link-color{
  display: flex;
  justify-content: center;
  align-items: end;
}
a:hover path {
  fill: var(--primary-color);
}

.menu-mobile {
  background-color: #ffffff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.link-color {
  color:initial;
  text-decoration: none;
}
.p-2 {
  padding: 0.3rem !important;
}
.col-3 span:not(.material-symbols-outlined) {
  font-size: 12px !important;
  font-weight: 300 !important;
}
@media (max-width: 768px) {
.mobile-menu-item{
  padding:5px 0!important;
}
.mobile-menu-item span{
  font-weight:300;
}
}
@media screen and (min-width: 768px) {
  .menu-mobile {
    display: none !important;
  }
}
/* @media screen and (min-width: 1600px) {
  .menu-mobile {
    display: none !important;
  }
}
@media screen and (min-width: 1900px) {
  .menu-mobile {
    display: none !important;
  }
} */
</style>
