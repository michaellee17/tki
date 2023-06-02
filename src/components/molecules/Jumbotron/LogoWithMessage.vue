<template>
  <div class="about-logo-message d-flex align-items-center mt-5 mb-5">
    <div class="col-4 d-flex ">
      <img class="about-logo" :src="$getFileSource(path)" :alt="$store.state.app.settings.websiteName" />
    </div>
    <div class="col-7">
      <span class="fw-light text-secondary fs-6">
        {{ message }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      path: 'images/logos/logo-'+process.env.VUE_APP_CURRENT_THEME+'.png'
    }
  }
};
</script>

<style scoped="scoped">
.about-logo {
  width: 150px;
}

@media (max-width: 767.98px) {
  .about-logo-message {
    display: block !important;
    
  }

  .about-logo {
    margin-bottom: 30px;
  }
  .col-7 {
    width: 100%;
  }
}
</style>
