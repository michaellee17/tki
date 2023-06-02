<template>
  <li v-if="items.length > 0">
    <div class="language-box dropdown-box position-relative">
      <a class="text-decoration-none language-current">
        {{ items[selectedIndex] }}
        <font-awesome-icon
          class="dropdown-icon"
          :icon="['fas', 'chevron-down']"
        />
      </a>
      <ul
        class="language-list list-none dropdown-list position-absolute list-unstyled"
        style="left:0;"
      >
        <slot name="list">
          <li v-for="item in items" :key="item">
            <a @click="announceEvent(item)"  class="pe-auto">{{ item }}</a>
          </li>
        </slot>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
    selectedIndex: {
      type: Number,
      default: 0,
    },
    eventToEmit: {
      type: String,
      default: "onItemClicked",
      required: true
    },
  },
  methods: {
    announceEvent(item) {
      if(this.eventToEmit === undefined) {
        return this.$emit('onItemClicked', item)
      } 
      return this.$emit(this.eventToEmit, item);
    }
  }
};
</script>

<style scoped="scoped">
.dropdown-box:hover .dropdown-list {
  opacity: 1;
  visibility: visible;
}
.dropdown-icon {
  margin-right: 5px;
  width: 6px;
}
a:hover {
  opacity: 0.8;
}

a {
  display: block;
  padding-right: 5px;
  color: #666;
  text-decoration: none;
}
li > a {
  padding: 5px 15px;
  cursor: pointer;
 
}
.currency-language .dropdown-list {
  width: 80px;
}
.currency-language > li {
  padding: 0 5px;
}
.dropdown-list {
  background: #fff;
  margin-top: 30px;
  opacity: 0;
  padding: 10px 0;
  z-index: 1100;
  position: absolute;
  left: 0;
  top: 0;
  visibility: hidden;
  list-style: none;
  width: 130px;
  box-shadow: 0 3px 8px 0 rgb(0 0 0 / 10%);
  transition: all 0.35s ease-out 0s;
  -webkit-transition: all 0.35s ease-out 0s;
}
</style>
