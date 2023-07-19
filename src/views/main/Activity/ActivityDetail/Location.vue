<template>
    <div>
        <h4 class="mb-4">{{ venue_info.venue_name }}</h4>
        <h5 class="fs-18 text-secondary mb-3">位置資訊</h5>
        <p>{{ venue_info.venue_address }}</p>
        <!-- 待串 google map -->
        <div class="img-location bg-cover mb-4"></div>
        <div v-html="venue_info.venue_content"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState('activity', ['venue_info']),
    }
  }
</script>

<style>
.img-location {
    background-image: url('../../../../assets/images/activity/location.png');
    width: 100%;
    height: 200px;
}
</style>