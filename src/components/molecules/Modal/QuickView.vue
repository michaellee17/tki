<template>
    <div class="position-fixed modall d-flex align-items-center justify-content-center">
        <div class="bg-white row position-relative ">
            <div class="close position-absolute" @click="$store.commit('forceCloseModal')">x</div>
            <div class="col-md-6 d-flex align-items-center justify-content-center">
                <img :src="$getFileSource(photos[0])" />
            </div>
            <div class="col-md-6 d-flex justify-content-center flex-column">
                <h1 class="bolded">{{name}}</h1>
                <p class="bolded mt-3 border-bottom pb-3 mb-5">
                   <template v-if="didAuctionEnd">
                        <template v-if="type === 'auction'">Current bid: </template> {{$formatPrice(currentBid)}}
                   </template>
                    <template v-else>
                        Auction ended
                   </template>
                </p>
                <div class="spacing">
                    SKU: {{sku}}
                </div>
                <div class="product-bid-categories spacing d-flex">
                    <span class="text-secondary">Categories: </span>
                    <FilterListTags :comma="true" class="list-category d-flex ms-2 m-0 p-0" :items="categories" />
                </div>
                <div class="product-bid-tags negative-spacing d-flex">
                    <span class="text-secondary">Tags: </span>
                    <FilterListTags :comma="true" class="ms-2  list-tags d-flex m-0 p-0" :items="tags" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FilterListTags from "../../atoms/Filter/FilterListTags.vue"
export default {
    components: {
        FilterListTags
    },
    props: {
        photos: {
            type: Array
        },
        name: {
            type: String
        },
        currentBid: {
            type: String
        },
        sku: {
            type: String
        },
        categories: {
            type: Array
        },
        tags: {
            type: Array
        },
        type: {
            type: String
        },
        endDate: {
            type: String
        }
    },
    computed: {
        didAuctionEnd() {
            return new Date(this.endDate) > new Date();
        },
    }
}
</script>

<style scoped="scoped">
.bolded {
    font-size: 24px !important;
    font-weight: bold;
}
.close {
    cursor:pointer;
    right:10px;
    top:10px;
    width: fit-content;
}
.modall > .row {
    width:1000px;
    height:480px;
}
img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
.spacing {
    margin:3px 0;
}
.negative-spacing {
    margin-top:-5px;
}
:deep(.item ) {
    font-weight: bold;
    color:#484848 !important;
}
</style>