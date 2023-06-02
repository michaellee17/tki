<template>
  <div :style="style" class="mas me-1 mb-1  ">
    <div class="d-flex prod-container flex-column justify-content-start">
      <h3 class="mas-title text-white text-uppercase">{{ title }}</h3>
      <span class="fw-light text-white no ">{{ productsNo }} Products</span>
      <ButtonOutline
        class="masonry-btn"
        :hasRoundedCorners="true"
        :wide="true"
        :size="'small'"
        v-if="viewMoreLocation"
        :location="viewMoreLocation"
        :text="'View More'"
      />
    </div>
  </div>
</template>

<script>
import ButtonOutline from "../../atoms/Button/ButtonOutline.vue";
export default {
  components: { ButtonOutline },
  props: {
    title: {
      type: String,
      required: true,
    },
    productsNo: {
      type: Number,
      required: true,
    },
    viewMoreLocation: {
      type: String,
    },
    height: {
      type: Number,
      default: 300,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
  computed: {
    style() {
      return (
        "height:" +
        this.height +
        "px;background-image:url('" +
        this.$getFileSource(this.imageSrc) +
        "')"
      );
    },
  },
};
</script>

<style scoped="scoped">
.mas-title {
  font-size: 30px !important;
  font-weight: 800 !important;
}
.prod-container {
  margin-left: 5%;
  margin-top: 5%;
  padding-left: 25px !important;
  padding-top: 20px !important;
}
.mas {
  display: flex;
  background-size: cover;
  background-position: center;
  position: relative;
}
.no {
  font-size: 16px;
}
.mas:before,
.mas:after,
.mas div:before,
.mas div:after {
  content: "";
  position: absolute;
  display: block;
  background: #fff;
  z-index: 4;
  transition: all 0.3s ease;
}
.mas:before,
.mas:after {
  width: 0;
  height: 1px;
}
.mas div:before,
.mas div:after {
  width: 1px;
  height: 0;
}
.mas:before {
  top: 30px;
  left: 30px;
}

.mas:hover:before,
.mas:hover:after {
  width: calc(100% - 60px);
}
.mas:hover div:before,
.mas:hover div:after {
  height: calc(100% - 60px);
}
.mas:after {
  bottom: 30px;
  right: 30px;
}
.mas div:before {
  bottom: 30px;
  left: 30px;
}
.mas div:after {
  top: 30px;
  right: 30px;
}
.masonry-btn {
  margin-top: 40px;
  padding: 10px 25px;
  width: fit-content;
}
.masonry-btn:hover {
  color: var(--primary-color);
  background-color: #fff !important;
}

@media (max-width: 767.98px) {
  .masonry-btn{
    margin-bottom:40px;
  }
  .mas {
    height: 50% !important;
  }
  .prod-container {
    padding-left: 2rem !important;
  }
  .masonry-btn {
    margin-top: 20px;
  }
}
</style>
