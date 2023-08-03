<template>
  <div ref="messageModal" class="modal messageModal" tabindex="-1">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body text-center fs-5">
          <font-awesome-icon v-show="success" :icon="['fas', 'check-circle']" class="icon mb-3" />
          <font-awesome-icon v-show="error" :icon="['fas', 'times-circle']" class="icon mb-3" />
          <font-awesome-icon v-show="warning" :icon="['fas', 'exclamation-circle']" class="icon mb-3"/>
          <slot>
            <p>no content yet</p>
          </slot>
          <!--  預設 button 樣式 -->
          <!-- <div class="mt-4 d-flex justify-content-around">
            <button type="button" class="btn btn-cancel px-4">取消</button>
            <button type="button" class=" btn btn-outline-primaryB px-4">確認</button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  props: ['success', 'error', 'warning'],
  data() {
    return {
      messageModal: {},
    }
  },
  mounted() {
    this.messageModal = new Modal(this.$refs.messageModal);
  },
  methods: {
    showModal() {
      this.messageModal.show()
    },
    hideModal() {
      this.messageModal.hide()
    }
  }
}
</script>

<style scoped lang="scss">
.modal.messageModal {
  top: 70%;
  transform: translateY(-50%);
  & .modal-body {
    padding: 1rem 1.5rem 2.5rem 1.5rem;
  }
  & .modal-content {
    border-radius: 20px;
  }
  & .modal-header {
    border-bottom: none;
    & .btn-close {
      padding: 0.5rem;
      font-size: 12px;
    }
  }
  & .icon {
    color: var(--primary-color);
    font-size: 45px;
  }
}
</style>