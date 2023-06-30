<template>
  <layout-default>
    <div class="container shop-breadcrumb border-bottom">
      <Breadcrumb class="breadcrumb" />
      <h1 class="shop-title mt-2">Shop</h1>
    </div>
    <div class="container shop-container">
      <div class="row">
        <div
          class="filter-col col-md-3 col-sm-12 pe-4 d-none d-md-block filter-mobile"
          :class="{ active: filterMenuState }"
        >
          <!-- Search -->
          <div class="filter-search-shop">
            <div>
              <FilterTitle
                class="title mb-3 mt-0"
                title="Search for auctions"
              />
            </div>
            <div>
              <BasicInputSearch
                class="list-search"
                placeHolder="Search products"
              />
            </div>
          </div>
          <!-- RangePrice -->
          <div class="d-flex filter-range-shop flex-column">
            <div>
              <FilterTitle class="title mb-3" title="Filter by price " />
            </div>
            <div class="shop-slider d-block">
              <vue-slider
                v-model="rangeSliderValue"
                :process="true"
                :max="500.0"
                :tooltip-formatter="(v) => $formatPrice(v)"
                :contained="true"
              ></vue-slider>
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <ButtonFilled
                  class="filter-btn text-white fw-bold mt-0"
                  text="Filter"
                  size="small"
                  :hasRoundedCorners="true"
                />
                <div class="price-font">
                  Price: {{ $formatPrice(rangeSliderValue[0]) }} -
                  {{ $formatPrice(rangeSliderValue[1]) }}
                </div>
              </div>
            </div>
          </div>
          <!-- ColorSelect -->
          <div class="d-flex color-select-shop flex-column">
            <div>
              <FilterTitle class="title mb-3" title="Color" />
            </div>
            <div class="shop-slider">
              <BasicInputSearch
                class="input-color mb-2"
                placeHolder="Any color"
              />
              <ButtonFilled
                class="filter-btn fw-bold text-white"
                name="Apply"
                text="Apply"
                size="small"
                :hasRoundedCorners="true"
              />
            </div>
          </div>
          <!-- Condition -->
          <div class=" d-flex condition-select-shop flex-column">
            <div>
              <FilterTitle class="title mb-3" title="Condition" />
            </div>
            <div class="shop-slider">
              <BasicInputSearch
                class="input-condition mb-2"
                placeHolder="Any Condition"
              />
              <ButtonFilled
                class="filter-btn fw-bold text-white"
                name="Apply"
                text="Apply"
                size="small"
                :hasRoundedCorners="true"
              />
            </div>
          </div>
          <!-- Size -->
          <div class=" d-flex size-select-shop flex-column">
            <div>
              <FilterTitle class="title mb-3" title="Size" />
            </div>
            <div class="align-items-start">
              <FilterListSize :items="dimensions" />
            </div>
          </div>
          <!-- Tags -->
          <div class="d-flex tags-shop flex-column">
            <div>
              <FilterTitle class="title mb-3" title="Product tags" />
            </div>
            <div class="align-items-start">
              <FilterListTags :items="tags" />
            </div>
          </div>
          <!-- Product Categories -->
          <div class="d-flex categories-shop flex-column">
            <div>
              <FilterTitle class="title mb-3" title="Product categories" />
            </div>
            <div class="product-categories-list align-items-start">
              <FilterListCategoryAndSubcategories :items="categories" />
            </div>
          </div>
        </div>
        <div class="col-md-9 col-sm-12 shop-grid" id="topGrid">
          <div class="fluid-container filter-bar-shop">
            <filter-bar
              :totalResults="numberOfItems"
              :itemsShowing="
                currentPage * itemsPerPage > numberOfItems
                  ? numberOfItems
                  : currentPage * itemsPerPage
              "
            >
              <template v-slot:left>
                <change-layout-buttons class="me-4" @onChange='layout = !layout'></change-layout-buttons>

                <button
                  class="float-end d-block d-md-none btn-link btn text-decoration-none"
                  @click="
                    showFilterMenu = !showFilterMenu;
                    $store.commit('toggleModal', 'filter');
                  "
                >
                  <font-awesome-icon class="fa icon" :icon="['fas', 'cogs']" />
                </button>
              </template>
              <template v-slot:right>
                <div class="sorting d-flex">
                  <BasicSelectBox
                    class="orderby"
                    :options="sortOptions"
                    @selected="selectedValue = $event"
                    :defaultValueText="'Default sorting'"
                  />
                </div>
              </template>
            </filter-bar>
          </div>
          <keep-alive>
            <component
              :is="layout === true ? 'Grid' : 'List'"
              :items="limitAuctionsPerPage()"
              :itemsPerRow="3"
            />
          </keep-alive>

          <pagination-buttons
            class="pagination-shop"
            v-if="numberOfItems / itemsPerPage > 1"
            resetID="topGrid"
            :pageNumbers="Math.ceil(numberOfItems / itemsPerPage)"
            @onChangePageNoRequest="updatePage"
            :currentPage="
              $route.params.pageNo === undefined
                ? currentPage
                : parseInt($route.params.pageNo)
            "
          ></pagination-buttons>
        </div>
      </div>
    </div>
  </layout-default>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue";
import PaginationButtons from "../../components/atoms/PaginationButtons/PaginationButtons.vue";
import FilterListCategoryAndSubcategories from "../../components/atoms/Filter/FilterListCategoryAndSubcategories.vue";
import FilterListTags from "../../components/atoms/Filter/FilterListTags.vue";
import FilterListSize from "../../components/atoms/Filter/FilterListSize.vue";
import FilterBar from "../../components/atoms/Filter/FilterBar.vue";
import Grid from "../../components/molecules/Layout/Grid.vue";
import List from "../../components/molecules/Layout/List.vue";
import BasicSelectBox from "../../components/atoms/FormInput/BasicSelectBox.vue";
import ChangeLayoutButtons from "../../components/atoms/Button/ButtonDouble.vue";
import BasicInputText from "../../components/atoms/FormInput/BasicInputText.vue";
import Breadcrumb from "../../components/atoms/Breadcrumb/Breadcrumb.vue";
import BasicInputSearch from "../../components/atoms/FormInput/BasicInputSearch.vue";
import FilterTitle from "../../components/atoms/Filter/FilterTitle.vue";
import ButtonFilled from "../../components/atoms/Button/ButtonFilled.vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { products } from "../../data/auctions.json";
import { tags } from "../../data/tags.json";
import { categories } from "../../data/productCategories.json";
import { dimensions } from "../../data/dimensions.json";
export default {
  beforeCreate() {
    document.title = "Products - iBid";
  },
  mounted() {
    this.$store.commit("setLocation", [{ title: "Shop", location: "/shop" }]);
    this.numberOfItems = this.auctions.length;
  },
  components: {
    LayoutDefault,
    PaginationButtons,
    FilterListCategoryAndSubcategories,
    FilterListTags,
    FilterListSize,
    FilterBar,
    Grid,
    List,
    BasicSelectBox,
    ChangeLayoutButtons,
    VueSlider,
    Breadcrumb,
    FilterTitle,
    BasicInputSearch,
    ButtonFilled,
    BasicInputText,
  },
  data() {
    return {
      itemsPerPage: 9,
      currentPage: 1,
      auctions: products, // alias items
      categories,
      test: "",
      sortOptions: [
        { name: "Sort by popularity", value: "popularity" },
        { name: "Sort by latest", value: "date" },
        { name: "Sort by price: low to high", value: "price" },
        { name: "Sort by price: high to low", value: "price_desc" },
        { name: "Sort by current bid: Low to high", value: "bid_asc" },
        { name: "Sort by current bid: High to low", value: "bid_desc" },
        { name: "Sort auction by ending soonest", value: "auction_end" },
        { name: "Sort auction by recently started", value: "auction_started" },
      ],
      selectedValue: "",
      layout: true,
      tags,
      dimensions,
      rangeSliderValue: [0.0, 500.0],
      numberOfItems: 0,
      showFilterMenu: false,
    };
  },
  methods: {
    limitAuctionsPerPage() {
      let nextItems =
        (this.currentPage - 1) * this.itemsPerPage + this.itemsPerPage;

      return this.auctions.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        nextItems > this.numberOfItems ? this.numberOfItems : nextItems
      );
    },
    updatePage(pageNo) {
      this.currentPage = pageNo;
    },
  },
  computed: {
    filterMenuState() {
      return this.$store.state.app.currentActiveModal === "filter"
        ? this.$store.state.app.currentActiveModal
        : false;
    },
  },
};
</script>
<style>
.vue-slider-process,
.vue-slider-dot-tooltip-inner {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
</style>
<style scoped="scoped">
.sorting {
  border: 1px solid #e6e6e6 !important;
  border-radius: 30px;
  padding: 0px 10px;
}
.btn-link {
  color: var(--primary-color);
  background: none !important;
}
.title {
  margin-top: 25px;
  font-size: 22px !important;
  width: 80%;
}
.shop-title {
  font-weight: 600 !important;
}
.filter-col {
  padding: 0px 15px;
  order: 1;
}
.list-search {
  border: 1px solid #e6e6e6 !important;
}
.input-color,
.input-condition,
.search-field.radius.border.input-condition {
  border-radius: 5px !important;
  border-color: #aaa;
  transition: border-color 0.25s ease-in-out;
}
.shop-grid {
  order: 2;
}
.shop-container {
  padding-top: 50px;
  padding-bottom: 50px;
}
.breadcrumb {
  padding-top: 40px;
}
.shop-breadcrumb {
  padding-bottom: 40px;
}
ul {
  padding: 0px;
}
.Minicart_button {
  width: 100px !important;
}
.filter-btn {
  margin-top: 5px;
  padding: 7px 25px !important;
}
.shop-slider {
  width: 240px;
}
.pagination-shop {
  margin-bottom: 70px;
  margin-top: 70px;
}
.price-font {
  font-size: 0.8751em;
}
.filter-search-shop,
.color-select-shop,
.condition-select-shop,
.filter-range-shop,
.size-select-shop,
.tags-shop,
.categories-shop {
  margin-bottom: 15px;
}
.color-filter,
.condition-filter {
  border-radius: 15px !important;
}

:deep(.Counter .col-3) {
  padding: 6px 9px !important;
}
@media (max-width: 767.98px) {
  :deep(.left-side) {
    width: 100%;
  }

  .filter-mobile {
    display: block !important;
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    width: fit-content;
    z-index: 9999;
    background: white;
    padding-top: 50px !important;
    overflow: auto;
    transform: translateX(-100%);
    transition: transform 0.25s ease-in-out;
  }
  .filter-mobile.active {
    transform: translateX(0);
  }
  .pagination-shop {
    justify-content: flex-start !important;
    padding: 0 10px !important;
  }
  .filter-bar-shop {
    padding: 0 10px;
  }
  .shop-breadcrumb {
    margin-bottom: 20px;
  }
  .breadcrumb {
    padding-top: 10px;
    margin-bottom: 0;
  }
  .filter-col {
    padding: 0 0 0 24px;
    order: 2;
  }
  .shop-grid {
    order: 1;
  }
  .shop-container {
    padding: 0;
  }
  .shop-breadcrumb {
    padding: 5px 10px;
  }
  :deep(.Counter .col-3) {
    padding: 7px 0px !important;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .shop-slider {
    width: 160px !important;
  }
}
</style>
