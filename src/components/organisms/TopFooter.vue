<template>
  <div class="search-wrapper">
    <div class="container">
      <div class="row py-4 d-flex">
        <div
          class="col-sm-6 col-md-6 d-flex justify-content-start align-items-center search-footer"
        >
          <span class="text-white fw-bolder fs-5"
            >Browse through our products library!</span
          >
        </div>
        <!-- Componenta Search -->
        <div
          class="col-sm-12 col-md-6  d-flex justify-content-end align-items-center"
        >
          <div class=" w-75 search-form-product">
            <div class="ibid-header-searchform">
              <form method="GET" action="shop">
                <Search
                  :placeholder="'Search products...'"
                  :buttonType="'submit'"
                  class="search-form"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../molecules/Search/Search.vue";
export default {
  components: { Search },
};
</script>

<style scoped="scoped">
.search-wrapper {
  background-color: var(--primary-color);
}

.search-form-product {
  background-color: #ffff;
  border-radius: 20px 20px 20px 20px;
}
.btn.btn-primary {
  background: #484848;
  float: right;
  line-height: 40px;
  padding: 0;
  border-radius: 30px;
  margin-right: -1px;
  padding-right: 15px;
  padding-left: 15px;
  height: 43px;
  position: relative;
  box-shadow: none;
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
}
.menu-search .search-field {
  background-color: #fff;
  border: 0;
  outline: 0;
  border-left: 0.5px solid #ddd;
  padding-left: 24px;
  line-height: 40px;
  height: 42px;
  color: #606060;
  width: 59%;
  font-size: 14px;
  font-weight: 300;
  max-width: 100%;
  border-radius: 20px 20px 20px 20px;
}
@media (max-width: 767.98px) {
  .search-footer {
    width: 100%;
    flex-grow: 1;
    margin-bottom: 20px;
  }

  .search-form-product {
    width: 100% !important;
    flex-grow: 2;
  }
}
</style>
