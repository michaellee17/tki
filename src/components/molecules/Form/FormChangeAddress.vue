<template>
<transition name="grow">
<form>
    <div class="container change-adress-form">
    <div class="row change-adress-row">
      <div class="col-md-12">
        <select class="form-select radius">
          <option selected="selected">Open this select menu</option>
          <option
            v-for="country in countries"
            :key="country"
            :value="country.code"
            >{{ country.name }}</option
          >
        </select>
      </div>
      <div
        class="col-md-12 col-country d-flex align-items-center justify-content-between"
      >
        <select class="form-select2 radius p-2">
          <option selected="selected">County</option>
          <option
            v-for="country in countries"
            :key="country"
            :value="country.code"
            >{{ country.name }}</option
          >
        </select>
        <basic-input-text
          class="form-control-town radius"
          :placeholder="'Enter Town/County'"
        ></basic-input-text>
      </div>
      <div class="col-md-12 col-zip">
        <basic-input-text
          class="form-control-zip radius"
          :placeholder="'Postal Code'"
        ></basic-input-text>
      </div>
      <div class="col-md-12 col-btn">
        <ButtonFilled
          class="fw-bold update-form-btn text-white"
          :name="'Update'"
          text="update"
          :hasRoundedCorners="true"
        />
      </div>
    </div>
  </div>
</form>
</transition>
</template>
<script>
import { countries } from "../../../data/countries.json";
import BasicInputText from "../../atoms/FormInput/BasicInputText.vue";
import ButtonFilled from "../../atoms/Button/ButtonFilled.vue";

export default {
  components: {
    ButtonFilled,
    BasicInputText,
  },
  data() {
    return {
      countries,
    };
  },
};
</script>
<style scoped="scoped">

.form-select2,
.form-control-town {
  height: 40px !important;
  margin: 0px !important;
  width: 580px;
}

.form-control-town > input {
  height: 10px !important;
}
.form-select {
  margin-bottom: 25px;
}
.col-zip {
  margin-bottom: 20px;
}
.col-country {
  margin-bottom: 25px;
}
.form-control-zip {
  height: 40px !important;
  margin: 0px !important;
}
.form-select,.form-select2,.form-control{
  padding:10px 20px!important;
  border-color:#ddd;
}
@media (max-width: 767.98px) {
  .col-country {
    display: flex !important;
    flex-direction: column;
    align-items: flex-end !important;
    margin: 0px !important;
  }
  .form-select2,
  .form-control-town {
    width: 100%;
    margin-bottom: 19px !important;
  }
  .col-btn {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .change-adress-form {
    width: 830px;
    margin: 0px;
  }
  .change-adress-row {
    width: 100% !important;
  }
  .form-select2 {
    width: 350px !important;
  }
  .form-control-town {
    width: 350px !important;
  }
}
</style>
