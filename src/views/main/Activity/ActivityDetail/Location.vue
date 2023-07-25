<template>
  <div>
    <h4 class="mb-4">{{ venue_info.venue_name }}</h4>
    <h5 class="fs-18 text-secondary mb-3">位置資訊</h5>
    <p>{{ venue_info.venue_address }}</p>
    <!-- 待串 google map -->
    <div class="img-location bg-cover mb-4" />
    <div class="google-map mb-4 d-none" id="map"></div>
    <div v-html="venue_info.venue_content" />
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader";
import { mapState } from 'vuex';

  export default {
    data() {
      return {
        map: null,
        position: { lat: -34.397, lng: 150.644 },
        position2: {},
        marker: null
      }
    },
    computed: {
      ...mapState('activity', ['venue_info']),
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const loader = new Loader({
          apiKey: "AIzaSyCEc9TsAD_4Tb87-lHy9rTFe4CbyGW-jII",
          version: "weekly",
        });
        /* google map 設定 */
        loader.load().then(async () => {
          const { Map } = await google.maps.importLibrary("maps");
          const { Marker } = await google.maps.importLibrary("marker");
          const { Geocode } = await google.maps.importLibrary("geocoding")

          this.map = new Map(document.getElementById("map"), {
            center: this.position,
            zoom: 10,
          });
           /* 地標 */
          this.marker = new Marker({
            map: this.map,
            position: this.position,
            // title: "Uluru",
          });
          // this.position2 = new Geocode({
          //   address: '高雄市左營區世運大道100號 高雄國家體育場'
          // });
        });
      }
    },
    
  }
</script>

<style>
.img-location {
    background-image: url('../../../../assets/images/activity/location.png');
    width: 100%;
    height: 200px;
}
.google-map {
    width: 100%;
    height: 300px;
}
</style>