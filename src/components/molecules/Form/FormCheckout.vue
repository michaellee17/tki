<template>
  <div class="checkout-forms d-flex">
    <div class="form-col">
      <div>
        <div class="row d-flex ">
          <span class="billing-details-title">Billing details</span>
          <!-- Name -->
          <div class="col-md-6">
            <basic-input-error :error="firstNameError">
              <basic-label
                class="checkout-label"
                :required="true"
                :title="'First Name'"
                :hasRoundedCorners="true"
              >
                <BasicInputText
                  v-model="firstName"
                  class="checkout-input mt-3"
                  required
                  :hasRoundedCorners="true"
                />
              </basic-label>
            </basic-input-error>
          </div>
          <!-- LastName -->
          <div class="col-md-6">
            <basic-input-error :error="lastNameError">
              <basic-label
                class="checkout-label last-name"
                :required="true"
                :title="'Last Name'"
              >
                <BasicInputText
                  v-model="lastName"
                  class="checkout-input  mt-3"
                  required
                  :hasRoundedCorners="true"
                />
              </basic-label>
            </basic-input-error>
          </div>
          <!-- Companyname -->
          <div class="col-md-12 mt-5">
            <basic-input-error :error="companyNameError">
              <basic-label
                class="checkout-label"
                :title="'Company Name (Optional)'"
              >
                <BasicInputText
                  v-model="companyName"
                  class="checkout-input mt-3"
                  :hasRoundedCorners="true"
                />
              </basic-label>
            </basic-input-error>
          </div>
          <!-- Country Select -->
          <div class="col-md-12 mt-5">
            <BasicLabel
              class="checkout-label"
              :required="true"
              :title="'Country/Region'"
            />
            <!-- select-->
            <select class="checkout-input w-100 radius mt-3">
              <option selected="selected" disabled required
                >Enter Town/County</option
              >
              <option
                v-for="country in countries"
                :key="country"
                :value="country.code"
                >{{ country.name }}</option
              >
            </select>
          </div>
          <!-- Street address -->
          <div class="col-md-12 mt-5">
            <basic-input-error :error="streetAddressError">
              <basic-label
                class="checkout-label"
                :required="true"
                :title="'Street Address'"
              >
                <BasicInputText
                  v-model="streetAddress"
                  class="checkout-input mt-3"
                  required
                  placeholder="House number and street name"
                  :hasRoundedCorners="true"
                />
              </basic-label>
            </basic-input-error>
          </div>
          <div class="col-md-12">
            <basic-input-error :error="streetAddress2Error">
              <BasicInputText
                v-model="streetAddress2"
                class="checkout-input mt-3"
                placeholder="Apartment, suite, unit, etc. (optional)"
                :hasRoundedCorners="true"
              />
            </basic-input-error>
          </div>
          <!-- Town -->
          <div class="col-md-12 mt-5">
            <basic-input-error :error="townNameError">
              <basic-label
                class="checkout-label"
                :required="true"
                :title="'Town/City'"
              >
                <basic-input-live-search
                  v-model="townName"
                  :items="countries"
                  :matchKey="'name'"
                  :placeholderText="'Search city'"
                  class="checkout-input w-100 mt-3"
                  :hasRoundedCorners="true"
                  :classes="'form-control'"
                />
              </basic-label>
            </basic-input-error>
          </div>

          <!-- County -->
          <div class="col-md-12 mt-5">
            <BasicLabel
              class="checkout-label"
              :required="true"
              :title="'County'"
            />
            <select class="checkout-input w-100 radius mt-3 " required>
              <option selected="selected" disabled>County</option>
              <option
                v-for="country in countries"
                :key="country"
                :value="country.code"
                >{{ country.name }}</option
              >
            </select>
          </div>
          <!-- PostCode -->
          <div class="col-md-12 mt-5">
            <basic-input-error :error="postalCodeError">
              <basic-label
                class="checkout-label"
                :required="true"
                :title="'Postal Code/ZIP'"
              >
                <BasicInputText
                  v-model="postalCode"
                  class="checkout-input mt-3"
                  required
                  :hasRoundedCorners="true"
                />
              </basic-label>
            </basic-input-error>
          </div>
          <!-- Phone -->
          <div class="col-md-12 mt-5">
            <basic-input-error :error="phoneError">
              <basic-label
                class="checkout-label"
                :required="true"
                :title="'Phone'"
              >
                <BasicInputText
                  v-model="phone"
                  class="checkout-input mt-3"
                  required
                  :hasRoundedCorners="true"
                />
              </basic-label>
            </basic-input-error>
          </div>
          <!-- Email -->
          <div class="col-md-12 mt-5">
            <basic-input-error :error="emailAddressError">
              <basic-label
                class="checkout-label"
                :required="true"
                :title="'Email Address'"
              >
                <BasicInputText
                  v-model="emailAddress"
                  class="checkout-input mt-3"
                  required
                  :hasRoundedCorners="true"
                />
              </basic-label>
            </basic-input-error>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInputLiveSearch from "../../atoms/FormInput/BasicInputLiveSearch.vue";
import BasicInputText from "../../atoms/FormInput/BasicInputText.vue";
import BasicInputError from "../../atoms/FormInput/BasicInputError.vue";
import BasicLabel from "../../atoms/FormInput/BasicLabel.vue";
import validatorCheckout from "../../../composables/validatorCheckout.js";
import { countries } from "../../../data/countries.json";
export default {
  setup() {
    return validatorCheckout();
  },
  components: {
    BasicInputLiveSearch,
    BasicInputText,
    BasicLabel,
    BasicInputError,
  },
  data() {
    return {
      countries
    }
  }
};
</script>
<style scoped="scoped">
.billing-details-title {
  font-size: 18px !important;
  color: #242424;
  margin: 20px 0 10px;
  font-weight: 600;
}
.checkout-label {
  font-weight:500;
}
.checkout-input input,select {
  border-radius: 30px;
  border-color: #ddd;
  padding: 10px 20px !important;
}
@media screen and (max-width: 768px){
  .last-name {
    margin-top:14px!important;
  }
}


</style>
