<template>
  <div class="product-card d-flex h-100">
    <div class="align-items-center d-flex justify-content-center">
      <link-wrapper class="text-decoration-none" :location="productURL">
        <div class="card border-0 position-relative">
          <img
            :class="{ hide: photos[1] }"
            :src="$getFileSource(photos[0])"
            :alt="name"
          />
          <img
            :class="{ show: photos[0] }"
            class="position-absolute"
            :src="$getFileSource(photos[1])"
            :alt="name"
          />
        </div>
      </link-wrapper>
    </div>
    <div class="card-name d-flex flex-column mt-4">
      <link-wrapper class="text-decoration-none text-dark" :location="productURL">
        <span class="fw-bold title">{{ name }}</span>
      </link-wrapper>
      <span class="fs-7 status">
        <template v-if="type === 'single'">
          <span class="fw-bold">{{ $formatPrice(currentBid) }}</span>
        </template>
        <template v-else-if="didAuctionEnd">
          Current Bid:
          <span class="fw-bold">{{ $formatPrice(currentBid) }}</span>
        </template>
        <template v-else>
          Auction ended
        </template>
      </span>
      <div class="icon">
        <IconCard
          class="icon-cardb mt-1 d-flex justify-content-md-start justify-content-center"
          :id="id"
          :productURL="productURL"
          :horizontal="true"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "../Product/ProductCard.vue";

export default {
  mixins: [ProductCard],
  computed: {
    didAuctionEnd() {
      return new Date(this.endDate) > new Date();
    },
    productURL() {
      return this.$buildProductURL(this.name, this.id);
    },
  },
};
</script>
<style scoped="scoped">
.card img {
  object-fit: cover;
}
.status {
  padding: 8px 0;
}
.fill {
  width: stretch;
}
.show,
.hide {
  transition: all 0.25s ease-in-out;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.show,
.product-card:hover .hide {
  visibility: hidden;
  opacity: 0;
}
.product-card:hover .show {
  visibility: visible;
  opacity: 1;
  top: 0;
}

.card-name {
  margin-left: 20px;
}
.card {
    width: 165px;
    height: 165px;
}
:deep(.icon-cards > .svg-inline--fa) {
  width: 36px ;
  height: auto;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  padding: 11px ;
}

span.title {
  font-size: 18px;
}

.product-card {
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}

/* Tablet */
@media (max-width: 1024px) {
  .card {
    width: 105px;
    height: 105px;
  }
}
/* Mobile */
@media (max-width: 767.98px) {
  .card-name {
    margin-left:0;
  }
  :deep(.icon-cards > .svg-inline--fa) {
    width: 24px !important;
    padding: 6px !important;
  }
  .card {
    align-items: center;
  }
  .col-md-5 {
    align-items: center !important;
    display: inline-block !important;
  }
  .card img {
    max-width: 90px !important;
  }
  :deep(.icon-cards) {
    margin: 5px !important;
  }
  .product-card {
    flex-direction: column;
    text-align: center;
  }

  .card-name span {
    font-size: 13px !important;
  }
}
</style>
