<template>
  <div class="icon-cards">
    <slot name="before"></slot>
    <tool-tip
      v-if="type === 'single'"
      :interactive="true"
      :hover="true"
      :class="{ 'm-0 horizontal': horizontal }"
      :placement="horizontal ? 'bottom' : 'right'"
      content="Buy product"
    >
      <div
        class="fa-2x rounded-circle text-white wrapper active d-flex justify-content-center align-items-center"
          @click="addToCart(id)"
      >
        <font-awesome-icon :icon="['fas', 'shopping-basket']" />
      </div>
    </tool-tip>

    <tool-tip
      v-else-if="!didAuctionEnd"
      :interactive="true"
      :hover="true"
      :class="{ 'm-0 horizontal': horizontal }"
      :placement="horizontal ? 'bottom' : 'right'"
      content="View product"
    >
      <link-wrapper :location="productURL">
        <div
          class="fa-2x rounded-circle text-white wrapper active d-flex justify-content-center align-items-center"
        >
          <font-awesome-icon :icon="['fas', 'eye']" />
        </div>
      </link-wrapper>
    </tool-tip>

    <tool-tip
      v-else
      :interactive="true"
      :hover="true"
      :class="{ 'm-0 horizontal': horizontal }"
      :placement="horizontal ? 'bottom' : 'right'"
      content="Bid Now"
    >
      <div
        class="fa-2x rounded-circle text-white wrapper active d-flex justify-content-center align-items-center"
        @click="$emit('iconAction', 'onBid')"
      >
        <font-awesome-icon
          class="fa-flip-horizontal"
          :icon="['fas', 'gavel']"
        />
      </div>
    </tool-tip>

    <tool-tip
      v-if="id"
      :interactive="true"
      :hover="true"
      :placement="horizontal ? 'bottom' : 'right'"
      :class="{ 'm-0 horizontal': horizontal }"
      :content="activeWish ? 'Remove from wishlist' : 'Add to wishlist'"
    >
      <div
        @click="
          activeWish ? removeFromWishlist(id) : addToWishlist(id);
          activeWish = !activeWish;
        "
        class="fa-2x p-2 rounded-circle text-white  wrapper d-flex justify-content-center align-items-center"
        :class="{ active: activeWish, play: activeWish }"
      >
        <font-awesome-icon :icon="[wishlistIcon, 'heart']" />
      </div>
    </tool-tip>
    <tool-tip
      :interactive="true"
      :hover="true"
      :placement="horizontal ? 'bottom' : 'right'"
      :class="{ 'm-0 horizontal': horizontal }"
      content="Quick View"
    >
      <div
        @click="$store.commit('toggleModal','qv-'+id);"
        class="fa-2x rounded-circle text-white wrapper d-flex justify-content-center align-items-center"
      >
        <font-awesome-icon :icon="['fas', 'search']" />
      </div>
    </tool-tip>

    <slot name="after"></slot>
  </div>
</template>

<script>
import LinkWrapper from "../LinkWrapper/LinkWrapper.vue";
import ToolTip from "../ToolTip.vue";
import {addToCart} from "../../../composables/manageCart"
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../composables/manageWishlist";

export default {
  components: { LinkWrapper, ToolTip },
  setup() {
    return { addToWishlist, removeFromWishlist, addToCart };
  },
  props: {
    id: {
      type: [Number, String],
    },
    productURL: {
      type: String,
    },
    directPurchase: {
      type: Boolean,
      default: false,
    },
    didAuctionEnd: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String ,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeWish:
        this.$store.state.wishlist.productIds.length > 0
          ? this.$store.getters["wishlist/productExistsInWishlist"](this.id)
          : false,
    };
  },
  computed: {
    wishlistIcon() {
      return this.activeWish ? "fas" : "far";
    },
    quickViewState() {
      return this.$store.state.app.currentActiveModal === "qv-"+this.id
        ? this.$store.state.app.currentActiveModal
        : false;
    },
  },
};
</script>

<style>
.play {
  animation-fill-mode: forwards;
  animation-name: bounce;
  animation-duration: 0.3s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-delay: 1ms;
}
.play svg {
  animation-fill-mode: forwards;
  animation-name: bounce;
  animation-duration: 0.3s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-delay: 1ms;
}
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce2 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>
<style scoped="scoped">
.horizontal {
  border-top: 0 !important;
  border-bottom: 0 !important;
}
.icon-cards > .horizontal:first-child {
  border-left: 0 !important;
}
.icon-cards:not(.d-flex) > svg:not(:first-child) {
  margin-top: 10px;
  display: block;
}

.icon-cards.d-flex > svg:not(:first-child) {
  margin-left: 15px;
}
.icon-cards > div:nth-child(2):not(.horizontal) {
  margin:3px -12px !important;
}
.wrapper {
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: white;
  transition-duration: 0.25s;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  color: #484848 !important;
}
.wrapper svg {
  width: 12px;
  height: 12px;
}
.wrapper.active {
  background-color: var(--primary-color) !important;
  color: white !important;
}
.wrapper:hover {
  background-color: var(--primary-color);
  transition-duration: 0.25s;
  color: #f2f2f2 !important;
}

/* .fa-gavel,
.fa-shopping-basket,
.fa-eye {
  background-color: var(--primary-color);
} */

@media (max-width: 767.98px) {
  .icon-cards {
    margin-top: 10px !important;
    margin-left: -10px !important;
  }
  .icon-cards > .horizontal:first-child {
    border-left: 12px solid transparent !important;
  }
}
@media (max-width: 980px) {
  .wrapper {
    width: 24px;
    height: 24px;
  }
  .icon-cards > .horizontal:not(:first-child) {
  margin-left: -5px !important;
}
}
</style>
