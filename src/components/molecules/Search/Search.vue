<template>
  <div class="ibid-header-searchform position-relative">
    <div class="woocommerce-product-search menu-search">
      <BasicSelectBox
        v-if="categoriesOptions"
        name="product_cat"
        class="form-control1"
        :defaultValueText="selectDefault"
        :options="categoriesOptions"
      />

      <input
        :class="{ 'has-select': categoriesOptions }"
        type="text"
        class="search-field"
        name="search"
        :placeholder="placeholder"
        v-model="message"
        required
      />

      <button :type="buttonType" class="top-footer-search btn btn-primary d-inline-block mb-0">
        <slot>
          <font-awesome-icon :icon="['fas', 'search']" />
        </slot>
      </button>
    </div>
    <search-suggestions
      class="position-absolute"
      v-if="suggestionCopy.length > 0 && message.length > 1"
      :suggestions="suggestionCopy"
    ></search-suggestions>
  </div>
</template>

<script>
import { filter } from "lodash";
import BasicSelectBox from "../../atoms/FormInput/BasicSelectBox.vue";
import SearchSuggestions from "./SearchSuggestions.vue";

export default {
  components: { BasicSelectBox, SearchSuggestions },
  props: {
    categoriesOptions: {
      type: Array,
    },
    placeholder: {
      type: String,
    },
    buttonType: {
      type: String,
    },
    selectDefault: {
      type: String,
    },
    suggestions: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      message: "",
      suggestionCopy: [],
    };
  },
  watch: {
    message() {
      this.$emit("onTyping", this.message);
      this.suggestionCopy = filter(this.suggestions, (obj) => {
        return obj.title.toLowerCase().includes(this.message.toLowerCase());
      });
      console.log(this.suggestionCopy);
    },
  },
};
</script>

<style scoped="scoped">
.search-field {
  margin-left: 10px;
}
.top-footer-search{
  border-radius:20px!important;
}
#product_cat {
  width: 30%;
}
.menu-search {
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  border-radius: 30px;
  font-size: 12px;
  padding-left: 24px;
}
.btn.btn-primary:hover {
  background: var(--primary-color);
  border-color: var(--primary-color);
}
.has-select {
  border-left: 0.5px solid #ddd !important;
  padding-left: 24px;
}
.btn.btn-primary {
  background: #484848;
  padding: 0;
  border-radius: 50px !important;
  padding: 8px 13px;
  box-shadow: none;
  outline: 0;
  transition: all 250ms ease;
  position: absolute;
  right: 0;
  margin-right: -1px;
}

.btn {
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
  outline: 0;
  height: 42px;
}
.menu-search .search-field {
  border: 0;
  outline: 0;
  line-height: 40px;
  color: #606060;
  font-size: 14px;
  font-weight: 300;
}
select.form-control1 {
  background: 0 0;
  outline: 0;
  border: 0;
  line-height: 40px;
  font-size: 14px;
  font-weight: 300;
  color: #606060;
}

@media screen and (min-width:750px) and (max-width:980px) {
  select.form-control1 {
    display: none;
  }
  .menu-search {
    padding: 0;
  }
  .has-select {
    border: none !important; 
  }
}
</style>
