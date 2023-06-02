<template>
  <table class="table table-bordered table-responsive">
    <tbody>
      <tr class="first-row align-middle">
        <th scope="row" class="fs-6 text-center p-4">Subtotal</th>
        <td class="td-subtotal text-end text-md-start">
          <span class="text-secondary ms-2 mt-3 mb-3fs-6">{{
            $formatPrice($store.getters.getSubtotal)
          }}</span>
        </td>
      </tr>
      <tr class="align-middle shipping-row ">
        <th scope="row shipping-row" class="fs-6 text-center p-4">Shipping</th>
        <td class="d-flex shipping-column flex-column ">
          <span class="text-secondary ms-2 mt-3 mt-1"
            ><b>Flat rate: </b
            ><b class="text-dark">{{
              $formatPrice($store.getters.getFeeByType("transport"))
            }}</b></span
          >
          <span class="text-secondary ms-2 mt-1"
            >Shipping to <b>{{ $store.state.user.location }}</b></span
          >
          <span
            class="change-adress ms-2 mt-1 text-primary mt-2 mb-3 fs-6"
            @click="changeAddress = !changeAddress"
            >Change Address
            <font-awesome-icon class="fa" :icon="['fas', 'truck']" />
          </span>
          <change-address-form v-if="changeAddress"></change-address-form>
        </td>
      </tr>
      <tr class="first-row align-middle">
        <th scope="row" class="fs-6 text-center p-4">Total</th>
        <td class="td-total text-end text-md-start" colspan="2">
          <span class="text-secondary ms-2 mt-3 mb-3 fs-6">{{
            $formatPrice($store.getters.getTotal)
          }}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import ChangeAddressForm from "../Form/FormChangeAddress.vue";

export default {
  components: { ChangeAddressForm },
  data() {
    return {
      changeAddress: false,
    };
  },
};
</script>
<style scoped="scoped">
td {
  width: 100%;
  padding:20px;
}
.shipping-column{
  border-left:0;
}
.change-adress {
  cursor: pointer;
}

@media (max-width: 767.98px) {
  th,
  td {
    border: none;
  }
  .table {
    border: 1px solid #ebe9eb;
  }
  .shipping-column {
    align-items: flex-end !important;
  }
  .col-md-12 {
    padding: 0px !important;
  }
  .col-country {
    align-items: flex-end !important;
  }
  .form-control-town input {
    margin: 0px !important;
  }
  .align-middle {
    display: flex !important;
    justify-content: space-between !important;
  }
  .first-row {
    align-items: center;
    display: flex;
    justify-content: space-between !important;
  }

  .shipping-row {
    background-color: rgba(0, 0, 0, 0.025);
    padding: px;
  }
}
</style>
