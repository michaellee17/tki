<template>
  <div
    v-if="items !== undefined"
    class="submenu-vertical position-absolute mx-auto">
    <div class="container">
      <div
        v-for="rowIdx in Math.ceil(items.length / colPerRow)"
        :key="rowIdx"
        class="row">
        <div
          v-for="item in items.slice(
            colPerRow * (rowIdx - 1),
            colPerRow * rowIdx
          )"
          :key="item"
          class="d-flex flex-column mb-3 col-wrapper"
          :class="rowClass(rowIdx)">
          <!-- <h6 class="fw-bold text-uppercase text-dark">{{ item.name }}</h6> -->
          <span v-for="link in item.links" :key="link" class="item-group">
            <font-awesome-icon
              v-if="link.icon"
              class="me-2"
              :icon="['fas', link.icon]" />

            <link-wrapper :remove-decorations="true" :location="link.location" :external="link.external" :target="link.target">{{
              link.name
            }}</link-wrapper>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: {
    LinkWrapper,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    colPerRow: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    colBootstrapConverter() {
      return "col-" + 12 / this.colPerRow;
    },
  },
  methods: {
    rowClass(rowIdx) {
      return rowIdx % this.colPerRow === 0
        ? "mt-4"
        : "" + this.colBootstrapConverter;
    },
  },
};
</script>

<style scoped="scoped">
.submenu-vertical {
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  /* width: max-content; */
  left: 100%;
  top: 0;
  z-index: 100;
  background: white;
}
.item-group svg {
  color: #606060;
  width: 13px;
}
.item-group:not(:last-child){
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)
}
.col-wrapper {
  min-width: 100px;
  margin: 1rem;
}
.item-group a {
  padding: 12px 0;
  line-height: 2.5;
  font-weight: 400;
}
.submenu-vertical a {
  line-height: 2;
  text-decoration: none;
  cursor: pointer;
  /* font-size: 1rem; */
}
.submenu-vertical a:hover {
  color: var(--primary-color);
}
h6 {
  font-weight: bold;
  font-size: 14px;
  color: #484848;
  margin-bottom: 10px;
}
</style>
