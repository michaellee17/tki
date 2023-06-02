<template>
  <div class="contact-info blue-background mx-auto d-flex flex-column ">
    <h1
      class="contact-info-title text-white fw-bold justify-content-start"
      >Contact Us</h1
    >
    <ul class="info-details mt-4">
      <li
        class="contact-adress d-flex text-white mb-3 justify-content-start align-items-center"
      >
        <font-awesome-icon class="fa-w-16" :icon="['fas', 'map-marker-alt']" />
        <span class="ms-3 fs-6 fw-light">{{
          $store.state.app.contactInfo.street
        }}</span>
      </li>
      <li
        class="contact-email d-flex text-white mb-3 justify-content-start align-items-center"
      >
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span class="ms-3 fs-6 fw-light">{{
          $store.state.app.contactInfo.email
        }}</span>
      </li>
      <li
        class="contact-phone d-flex text-white  justify-content-start align-items-center"
      >
        <font-awesome-icon :icon="['fas', 'phone']" />
        <span class="ms-3 fs-6 fw-light">{{
          $store.state.app.contactInfo.phoneNo
        }}</span>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  components: {},
};
</script>
<style scoped="scoped">
.contact-info {
  padding-top: 80px !important;
  padding-right: 50px !important;
  padding-bottom: 120px !important;
  padding-left: 50px !important;
}
.info-details {
  padding: 0 !important;
}

@media (max-width: 767.98px) {
  .contact-info {
    width: 100% !important;
  }
}
</style>
