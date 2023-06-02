<template>
  <div class="feature-list">
    <div class="feature ">
      <img class="float-start" :src="$getFileSource(imageSrc)"  :alt="title" />
      <div class="feature-text ">
        <h5 class="fw-bold">{{ title }}</h5>
        <p class="feature-paragraph">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
  },
};
</script>

<style scoped="scoped">
.feature {
  margin-right: 30px;
}

.feature img {
  height: 60px;
  width: 50px;
  margin-right: 20px;
}
.feature-text p{
  color:#606060;
}

@media screen and (max-width: 600px) {
  .feature-text p {
    display: none;
  }
  .feature {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
  }
  .feature-text {
    max-width: 70px;
  }
}

@media screen and (max-width: 768px) {
  .feature-text {
    display: inline-block;
  }

.feature {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content:center;
  }

  .feature-text {
    max-width: 70px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .feature-text{
    text-align:justify!important;
    }
  .feature-paragraph{
    text-align:start;
  }
}
</style>
