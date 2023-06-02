<template>
    <div>
        <swiper :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" class="mySwiper2">
            <swiper-slide v-for="photo in photos" :key="photo">
                <v-zoomer>
                    <img :src="$getFileSource(photo)" style="object-fit: contain; width: 100%; height: 100%;"/>
                </v-zoomer>
            </swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" class="mySwiper">
            <swiper-slide v-for="photo in photos" :key="photo">
                <div class="d-flex align-items-center justify-content-center">
                    <img :src="$getFileSource(photo)" height="100" width="100" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from "swiper/vue";

import "swiper/swiper-bundle.css";



// import Swiper core and required modules
import SwiperCore, {
    Navigation,
    Thumbs
} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        photos: {
            type: Array
        }
    },
    data() {
        return {
            thumbsSwiper: null,
        };
    },
    methods: {
        setThumbsSwiper(swiper) {
            this.thumbsSwiper = swiper;
        },
    },
};
</script>