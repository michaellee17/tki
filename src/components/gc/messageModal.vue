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
          <!-- <button type="button" class="ms-auto mt-2 btn btn-outline-primaryB px-2">確認</button> -->
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
.messageModal {
  & .modal-dialog {
    width: 250px;
  }
  & .modal-body {
    padding: 0rem 1rem 2rem 1rem;
  }
  & .modal-content {
    // background-color: var(--primary-color);
    // color: #fff;
    background-color: var(--primary-light-color);
    border-radius: 20px;
    text-align: center;
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