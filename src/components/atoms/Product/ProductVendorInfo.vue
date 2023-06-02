<template>
  <div class="vendor-info d-flex flex-column">
    <div class="store-name d-flex align-items-center" v-if="storeName">
      <font-awesome-icon class="blue-color" :icon="['fas', 'shopping-cart']" />
      <span class="ms-3 vendor-details fw-light text-secondary">
        Store Name: {{ storeName }}
      </span>
    </div>
    <div class="store-name d-flex align-items-center mt-2" v-if="vendor">
      <font-awesome-icon class="blue-color" :icon="['fas', 'user']" />
      <span class="ms-3 vendor-details fw-light text-secondary">
        Vendor:
        <link-wrapper :href="vendorLink"
          ><b class="blue-color fw-bold"> {{ vendor }} </b></link-wrapper
        >
      </span>
    </div>
    <div class="store-name d-flex align-items-center mt-2" v-if="address">
      <font-awesome-icon class="blue-color" :icon="['fas', 'map-marker']" />
      <span class="ms-3 vendor-details fw-light">
        <b class="fw-bold">Address:</b> {{ address }}</span
      >
    </div>
    <div class="ms-1 d-flex align-items-center mt-2 " v-if="ratingScore<= 5 && ratingScore > 0">
      <font-awesome-icon
        v-for="score in ratingScore"
        :key="score"
        class="blue-color"
        :icon="['fas', 'star']"
      />

      <span class="ms-3 vendor-details fw-light">
        {{ ratingScore }} rating from {{ ratingNum }} review</span
      >
    </div>
  </div>
</template>

<script>

import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";

export default {
  components: { LinkWrapper },
  props: {
    storeName: {
      type: String,
    },
    vendor: {
      type: String,
    },
    vendorLink: {
      type: String,
    },
    address: {
      type: String,
    },
    ratingScore: {
      type: Number,
      validator(value) {
        return value <= 5 && value > 0
      }
    },
    ratingNum: {
      type: Number,
    },
  },
};
</script>

<style scoped="scoped">
.vendor-details {
  font-size: 16px;
}
.store-name > svg  {
  width:15px;
}
</style>
