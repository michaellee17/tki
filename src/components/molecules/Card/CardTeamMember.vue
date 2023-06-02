<template>
  <div class="team-cards position-relative d-flex align-items-center justify-content-center">
    <img
      class="d-flex position-relative flex-row oveflow-auto"
      :src="$getFileSource(imageSrc)"
      :alt="name"
    />
    <div
      class="member-info d-flex position-absolute oveflow-auto flex-column align-items-center "
    >
      <span class="member-name">{{ name }}</span>
      <span class="member-occupation fw-light text-secondary fs-6">{{
        occupation
      }}</span>
      <div v-if="socials" class="social-media my-3">
        <link-wrapper
          v-for="social in socials"
          :key="social"
          :location="social.location"
          ><font-awesome-icon
            class="icon blue-color"
            :icon="['fab', social.icon]"
        /></link-wrapper>
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
    imageSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    socials: {
      type: Array,
    },
  },
};
</script>
<style scoped="scoped">
.member-name {
  font-size: 20px !important;
  margin-top: 20px;
}
.member-occupation {
  font-size: 12px !important;
}
.social-media a:not(:last-child) {
  margin-right:1rem;
}

.member-info {
  width: 250px;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  padding: 5px;
  transition: all 0.3s linear;
  justify-content: center;
  visibility: hidden;
  transform: translateY(-50px);
}

.team-cards:hover .member-info {
  visibility: visible;
  transform: translateY(-100%);
  background-color: #ffff !important;
}

.team-cards img {
  width: 150px;
  height: 145px;
  border-radius: 50% !important;
}
</style>
