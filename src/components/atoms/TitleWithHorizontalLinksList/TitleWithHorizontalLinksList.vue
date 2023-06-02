<template>
  <div class="col">
    <h6 @click="show = !show" class="footer-link-title fs-4 fw-bold justify-content-between d-flex ">
      <span>{{ title }} </span><font-awesome-icon class="d-md-none" :icon="['fas', 'chevron-down']" />
    </h6>
    <ul class="list-unstyled d-md-block" :class="{'d-block': show, ' d-none': !show}">
      <li class="mb-2"  v-for="link in links" :key="link">
        <font-awesome-icon :icon="['fas', 'angle-double-right']" />
        <link-wrapper
          class="ms-2 link-text text-secondary text-decoration-none"
          :location="link.location"
          :v-bind="link.args"
          >{{ link.name }}</link-wrapper
        >
      </li>
    </ul>
  </div>
</template>

<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";
export default {
  components: { LinkWrapper },
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      show: false
    }
  }
};
</script>

<style scoped="scoped">
.footer-link-title {
  margin: 0 0 19px !important;
}

.link-text {
  color: #afafaf !important;
}
.link-text:hover {
  color: var(--primary-color) !important;
}
</style>
