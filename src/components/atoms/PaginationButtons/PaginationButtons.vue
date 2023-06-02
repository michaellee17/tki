<template>
  <div class="d-flex justify-content-center justify-content-md-start">
    <button
      v-if="currentPageWrapper > pageNumbers / 4 && currentPageWrapper > 1"
      class="btn pagination-btn btn-lg me-3 text-dark d-flex align-items-center justify-content-center"
      @click="changePage(currentPageWrapper - 1)"
    >
      <span class="pagination-text fs-6">
        <font-awesome-icon
          class="fa"
          style="transform: rotateY(180deg)"
          :icon="['fas', 'arrow-right']"
      /></span>
    </button>

    <template v-for="no in showLessPages" :key="no">
      <button
        @click="changePage(no)"
        v-if="no > 0 && no <= pageNumbers"
        :class="{ active: currentPageWrapper === no || currentPageWrapper === 0 && no == 1 }"
        class="btn pagination-btn btn-lg btn-active me-3 text-dark d-flex align-items-center justify-content-center"
      >
        <span>{{ no }}</span>
      </button>
    </template>

    <button
      v-if="currentPageWrapper !== pageNumbers"
      class="btn pagination-btn btn-lg text-dark d-flex align-items-center justify-content-center"
      @click="changePage(currentPageWrapper + 1)"
    >
      <span class="fs-6">
        <font-awesome-icon class="fa" :icon="['fas', 'arrow-right']"
      /></span>
    </button>
  </div>
</template>
<script>

export default {
  props: {
    pageNumbers: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    resetID: {
      type: String,
      default: "no",
    },
  },
  data() {
    return {
      currentPageWrapper: this.currentPage - 1,
    };
  },
  methods: {
    changePage(pageNo) {
      if (this.resetID !== "no")
        document.getElementById(this.resetID).scrollIntoView();
      this.$emit("onChangePageNoRequest", Math.round(pageNo));
      this.currentPageWrapper = pageNo;
    },
  },
  computed: {
    showLessPages() {
      return [
        this.currentPageWrapper - 3,
        this.currentPageWrapper - 2,
        this.currentPageWrapper - 1,
        this.currentPageWrapper,
        this.currentPageWrapper + 1,
        this.currentPageWrapper + 2,
        this.currentPageWrapper + 3,
      ];
    },
  },
};
</script>

<style scoped="scoped">
.btn {
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  background-color: #ffffff;
  border: 2px solid #0000;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding: 0;
}
.btn.btn-lg {
  transition: all 0.25s ease-in-out;
}

.active,
.btn.btn-lg:hover {
  background-color: var(--primary-color);
  color: white !important;
}
.btn span {
  font-size: 15px;
}
.btn-lg {
  font-size: 10px;
}
</style>
