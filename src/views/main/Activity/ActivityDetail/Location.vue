<template>
  <div>
    <h4 class="mb-4">{{ venue_info.venue_name }}</h4>
    <h5 class="fs-18 text-secondary mb-3">位置資訊</h5>
    <p>{{ venue_info.venue_address }}</p>
    <div class="google-map mb-4" id="map" ref="map"></div>
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
        position: { lat: 0, lng: 0 },
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
        
        loader.load().then(async () => {
          const { Map } = await google.maps.importLibrary("maps");
          const { Marker } = await google.maps.importLibrary("marker");
          const { Geocoder } = await google.maps.importLibrary("geocoding")
          
          /* 將地址轉為經緯度 */
          const geocoder = new Geocoder();
          geocoder.geocode({ 'address': this.venue_info.venue_address }, (results, status) => {
            if (status === 'OK') {
              this.position.lat = results[0].geometry.location.lat(); 
              this.position.lng = results[0].geometry.location.lng(); 

              /* google map 設定 */
              this.map = new Map(document.getElementById("map"), {
              center: this.position,
              zoom: 15,
              });

              /* 地標 */
              this.marker = new Marker({
                map: this.map,
                position: this.position,
              })
            } else {
              this.$refs.map.classList.add('d-none');
              console.error('查無座標：', status);
            }
          });
          
          
        });
      }
    },
    
  }
</script>

<style>
.google-map {
    width: 100%;
    height: 300px;
}
</style>