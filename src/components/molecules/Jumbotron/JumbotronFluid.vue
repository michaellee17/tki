<template>
  <div class="fluid-container main-content-header" :style="getBackground">
    <div class="container">
      <div class="content d-block">
        <h1 class="main-content-title">{{title}}</h1>
        <h1 class="main-content-subtitle"><b>{{subtitle}}</b></h1>
        <p class="main-content-paragraph">
        {{content}}
        </p>
        <div>
          <button-outline
            :location="'shop'"
            class="main-content-btn"
            :hasRoundedCorners="true"
            :size="'small'"
          >
            <span class="text-uppercase">view auctions</span>
          </button-outline>
        </div>
      </div>
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
    subtitle: {
      type: String,
    },
    content: {
      type: String,
    },
    imagePath: {
      type: String
    }
  },
  computed: {
    getBackground() {
      return "background-image: url(" + this.$getFileSource(this.imagePath) + ");";
    },
  },
};
</script>

<style scoped="scoped">
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap");

.main-content-header {
  padding: 150px 61.5px 200px;
  background-size: cover;
  font-family: Playfair Display;
  background-position: center center;
}
.content {
  padding: 10px 15px;
}
.main-content-paragraph {
  font-size: 20px;
  color: var(--primary-color) !important;
  font-family: Playfair Display;
  max-width: 500px;
}
.main-content-title {
  font-size: 55px;
  margin: 20px 0 10px;
  color: #242424;
}
.main-content-subtitle {
  font-size: 55px;
  margin: 20px 0 10px;
  color: #242424;
}
.main-content-btn {
  color: #242424;
  border-color: #242424;
  font-family: sans-serif !important;
  font-weight: 500;
  border: 2px solid;
  padding: 12px 25px;
  font-size: 14px !important;
  width: 160px;
}
.main-content-btn:hover {
  background-color: #ea7f23 !important;
  color: #ffff;
  border-color: #ea7f23 !important;
}
@media (max-width: 767.98px) {
  .main-content-header {
    padding: 150px 0;
  }
}
</style>
