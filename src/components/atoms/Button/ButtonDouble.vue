<template>
  <div class="btn-group">
    <button
      @click="
        $emit('onChange', false);
        active = false;
      "
      :class="{ active: active === false }"
      type="button"
      class="btn p-0"
    >
      <slot name="leftButtonContent">
        <font-awesome-icon class="fa icon" :icon="['fas', 'border-all']" />
      </slot>
    </button>

    <button
      @click="
        $emit('onChange', true);
        active = true;
      "
      :class="{ active: active === true }"
      type="button "
      class="btn p-0"
    >
      <slot name="rightButtonContent">
        <font-awesome-icon class="fa icon" :icon="['fas', 'th-list']" />
      </slot>
    </button>
  </div>
</template>

<script>

export default {
  props: {
    defaultActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      active: this.defaultActive,
    };
  },
};
</script>
<style scoped="scoped">
.fa {
  width: 13px;
}
.btn-1 {
  border: 0;
  border-radius: 20px 20px 20px 20px;
}
.icon {
  color: var(--primary-color);
}
.btn {
  background: white;
}

.btn-group {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 15%);
  border-radius: 20px 20px 20px 20px;
  width: 80px;
  height: 30px;
}
.btn-1:hover,
.active {
  background-color: var(--primary-color);
  color: #ffff !important;
}
.active > .icon {
  color: #ffff !important;
}
</style>
