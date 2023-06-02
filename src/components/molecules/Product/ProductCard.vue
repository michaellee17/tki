<template>
  <div class="text-decoration-none h-100">
    <div class="product-card d-inline-block border-0 position-relative h-100">
      <IconCard
        class="position-absolute mt-4 icon-card"
        :productURL="productURL"
        :didAuctionEnd="didAuctionEnd"
        :id="id"
        :type="type"
      />
      <link-wrapper class="text-decoration-none bb" :location="productURL">
        <div class="card position-relative border-0">
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
      <div class=" product-card-title pt-2 pb-2 position-relative h-50">
        <Counter
          :endDate="endDate"
          class="prod-card-counter position-absolute"
          counterInnerClass=" mx-auto"
          v-if="didAuctionEnd && type ==='auction'"
        />
        <div class="position-relative elbordaro">
          <h3 class="fw-bold product-title m-0">
            <link-wrapper class="text-decoration-none " :location="productURL">
              {{ name }}
            </link-wrapper>
          </h3>
          <div class="details">
            <template v-if="type ==='single'">
              <span class="fw-bold">{{ $formatPrice(currentBid) }}</span>
            </template>
            <template v-else-if="didAuctionEnd">
              Current Bid:
              <span class="fw-bold">{{ $formatPrice(currentBid) }}</span>
            </template>
            <template v-else>
              Auction ended
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconCard from "../../atoms/Button/ButtonQuickActionsPack.vue";
import Counter from "../../atoms/Counter/Counter.vue";
import LinkWrapper from "../../atoms/LinkWrapper/LinkWrapper.vue";

export default {
  components: { IconCard, Counter, LinkWrapper },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
    },
    photos: {
      type: Array,
    },
    currentBid: {
      type: Number,
    },
    endDate: {
      type: Date,
    },
    location: {
      type: String,
    },
    type: {
      type: String
    }
  },
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
.product-card {
  background: white;
  width: 100%;
}
.bb {
  border-bottom: 1px solid #dfe5e9 !important;
}
.card {
  width: 100%;
  overflow: hidden;
  margin: auto;
  display: flex;
  height:300px !important;
  justify-content: center;
  align-items: center;
  border-radius: 0 !important;
}
.product-title {
  padding: 20px 20px 0px;
  text-align: center;
  background: #fff;
  line-height: 24px;
  color: #242424;
}
.prod-card-counter {
  transition: opacity 0.25s ease-in-out;
  top:-60px;
}
.product-card:hover .prod-card-counter {
  opacity: 0;
}
.product-title a:hover {
  color: var(--primary-color);
  transition: all 0.3s ease-out;
}
.product-title a {
  transition: all 250ms ease;
  -webkit-transition: all 250ms ease;
}
.product-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-card a {
  align-self: center;
  color: #484848;
  display: block;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  transition: color 0.25s ease-in-out;
}
.product-card a:hover {
  color: var(--primary-color);
}
.icon-card {
  left: 20px;
  z-index: 1;
}
.details {
  overflow: hidden;
  padding: 5px 5px 10px;
  background: #fff;
  text-align: center;
  color: #606060;
}
.show,
.hide {
  transition: all 0.25s ease-in-out;
}
.show,
.product-card:hover .hide {
  visibility: hidden;
  opacity: 0;
}
.product-card:hover .show {
  visibility: visible;
  opacity: 1;
  transform: scale(1.1);
  
}

.product-card {
  overflow: hidden;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
@media (max-width: 767.98px) {
  .prod-card-counter {
    top:-55px;
  }
  .Counter {
    margin-top: 25px;
    width: 100%;
    display: flex;
  }
  .product-title a {
    font-size: 15px !important;
  }
  .product-title {
    padding-top: 0 !important;
    padding: 20px 5px 0;
  }
  .details {
    font-size: 12px !important;
  }
  .elbordaro {
    margin-top: 10px;
  }
}
</style>
