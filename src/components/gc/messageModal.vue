<template>
  <div ref="messageModal" class="modal messageModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div class="modal-body">
          <slot>
            <p>no content yet</p>
          </slot>
          <!-- <button type="button" class="ms-auto mt-2 btn btn-light link-primary rounded-pill px-3">確認</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";

export default {
  data() {
    return {
      messageModal: {}
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
  & .modal-dialog {
    width: 280px;
  }
  & .modal-body {
    padding: 1rem 1.5rem 2rem 1.5rem;
  }
  & .modal-content {
    // background-color: var(--primary-color);
    // color: #fff;
    // background-color: var(--primary-light-color);
    border-radius: 20px;
  }
  & .modal-header {
    border-bottom: none;
    & .btn-close {
      padding: 0.5rem;
      font-size: 12px;
    }
  }
}
</style>