<template>
  <div class="submenu-vertical position-absolute mx-auto d-flex flex-column p-5">
    <span class="fw-light fs-6 text-secondary"
      >To track your order please enter your Order ID in the box below and press
      the "Track" button. This was given to you on your receipt and in the
      confirmation email you should have received.</span
    >

    <div class="row mx-auto mt-3 w-100 d-flex ">
      <div class="col-6 d-flex flex-column ps-0 pe-3 ">
        <span class="fs-6 text-secondary fw-bold ">Order ID</span>
        <div class="input-group  input-group-sm mb-3">
          <input
            type="text"
            placeholder="Found in your order"
            class="form-control rounded-pill pt-2 pb-2"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>
      <div class="col-6 d-flex flex-column ps-0 pe-3 ">
        <span class="fs-6 text-secondary fw-bold">Billing email</span>
        <div class="input-group input-group-sm mb-3">
          <input
            type="text"
            placeholder="Email you used"
            class="form-control rounded-pill pt-2 pb-2"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>
    </div>
    <button class="btn btn-sm rounded-pill text-white fw-bold mt-3">
      <span>TRACK</span>
    </button>
  </div>
</template>
<style scoped="scoped">
.submenu-vertical {
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  width: 500px;
  left: 100%;
  top: 0;
  z-index: 100;
  background: white;
}
.btn {
  width: 100px;
  background-color: var(--primary-color);
}
.btn:hover {
  background-color: #ffff;
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
}
.btn span:hover {
  color: var(--primary-color);
  
}

</style>
