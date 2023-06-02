<template>
  <div class="testimonial d-flex flex-column">
    <div class="testimonial-message d-flex justify-content-end">
      <div class="testimonial-messages text-justify fw-light ">
        <span class="testimonial-text fs-6">{{ text }}</span>
      </div>
    </div>
    <div class="testimonial-card ms-4 mt-4">
      <div class="testimonial-card d-flex flex-row ">
        <div class="member-info d-flex flex-row align-items-center">
          <img :src="$getFileSource(imageSrc)" :alt="name" />
          <div class="d-flex flex-column ms-3">
            <span class="fw-bold text-secondary fs-5">{{ name }}</span>
            <span class="fw-light text-secondary fs-6">{{ position }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    imageSrc: {
      type: String,
    },
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>
<style scoped="scoped">
.testimonial-message{
  margin:15px 15px;
  border-radius: 30px;
  box-shadow: 0px 0px 18px rgb(0 0 0 / 10%);
  padding:40px 38px;
}
.testimonial-card img {
  max-width: 89px;
  max-height: 130px;
  border-radius: 50%;
}

</style>
