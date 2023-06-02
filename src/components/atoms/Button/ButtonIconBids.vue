<template>
  <div class="icon-cards d-flex align-items-center">
    <slot name="before"></slot>

    <div
      class="hammer-icon ms-md-2 text-white rounded-pill"
      v-if="didAuctionEnd && type === 'auction'"
    >
      <font-awesome-icon
        @click="$store.dispatch('addProduct', product)"
        class="fa-2x fa-flip-horizontal"
        :icon="['fas', 'gavel']"
      />
    </div>

    <ButtonFilled
      v-if="type === 'single'"
      class="fw-bold  ms-md-4 "
      :hasRoundedCorners="true"
      @click="addToCart(id)"
      :text="'Add to cart'"
    />

    <template v-if="id">
      <tool-tip
        class="ms-0"
        :interactive="true"
        :hover="true"
        :content="activeWish ? 'Remove from wishlist' : 'Add to wishlist'"
        :placement="horizontal ? 'bottom' : 'right'"
      >
        <font-awesome-icon
          @click="
            activeWish ? removeFromWishlist(id) : addToWishlist(id);
            activeWish = !activeWish;
          "
          class="fa-2x icon rounded-circle text-white"
          :class="{
            active: activeWish,
            'ms-3': !didAuctionEnd,
            play: activeWish,
          }"
          :icon="[wishlistIcon, 'heart']"
        />
      </tool-tip>
    </template>

    <tool-tip
      :interactive="true"
      :hover="true"
      class="m-0"
      content="Add to Watchlist"
      :placement="horizontal ? 'bottom' : 'right'"
    >
      <font-awesome-icon
        @click="$emit('iconAction', 'onAddToWatchlist')"
        class="fa-2x icon rounded-circle text-white"
        :icon="['fas', 'eye']"
        v-if="type !== 'single'"
      />
    </tool-tip>

    <slot name="after"></slot>
  </div>
</template>

<script>
import ToolTip from "../ToolTip.vue";
import ButtonQuickActionsPack from "./ButtonQuickActionsPack.vue";
import ButtonFilled from "../Button/ButtonFilled.vue";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../composables/manageWishlist";
import {
  addToCart,
} from "../../../composables/manageCart";
export default {
  setup() {
    return { addToWishlist, removeFromWishlist,addToCart };
  },
  mixins: [ButtonQuickActionsPack],
  components: { ButtonFilled, ToolTip },
};
</script>
<style scoped="scoped">
.icon-cards:not(.d-flex) > svg:not(:first-child) {
  margin-top: 10px;
  display: block;
}
.hammer-icon {
  padding: 1px 15px;
  background-color: var(--primary-color);
  cursor: pointer;
  transition: background-color 0.25s linear;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
}
.hammer-icon:hover {
  background-color: white;
}
.hammer-icon:hover > svg {
  transition: color 0.25s linear;

  color: var(--primary-color);
}
.hammer-icon svg {
  padding: 9px;
}
.icon-cards.d-flex > svg:not(:first-child) {
  margin-left: 20px;
}
.icon-cards > svg {
  cursor: pointer;
}
.icon-cards svg {
  width: 35px;
  height: 35px;
}
.icon {
  padding: 10px;
}
.fa-heart,
.fa-eye {
  background-color: white;
  transition-duration: 0.25s;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 10%);
  color: #484848 !important;
}
.fa-eye:hover,
.fa-heart:hover,
.active {
  background-color: var(--primary-color);
  transition-duration: 0.25s;
  color: #f2f2f2 !important;
}

@media (max-width: 767.98px) {
  .icon-cards:not(.d-flex) > a:not(:first-child) {
    margin-top: 8px;
  }
  .icon-cards {
    margin-left: -20px !important;
  }
}
</style>
