<template>
  <h5 class="fs-18 text-secondary mb-3">購票資訊</h5>
  <div class="row flex-column flex-md-row gap-3 justify-content-center">
    <div class="col-12 col-md-5">
      <div class="img-wrap-buy-ticket">
        <img src="../../../../assets/images/activity/news2.jpg" class="img-cover" alt="">
      </div>
    </div>
    <div class="col-12 col-md-6">
      <p class="fs-5">售票時間：2023/06/03 12:00 ~ 2023/07/01 19:30</p>
      <div class="d-flex gap-3 mb-4">
        <button type="button" class="btn btn-outline-primaryA active">6/11</button>
        <button type="button" class="btn btn-outline-primaryA">6/12</button>
        <button type="button" class="btn btn-outline-primaryA">6/13</button>
      </div>
      <div class="choose-date mb-4">
        <div class="soldout d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">BORN PINK座位特區 (票價含Sound …</h6>
            <p class="text-primary mb-0">NTD 8,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">已完售 ></p>
        </div>
        <router-link to="type">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h6 class="mb-1">平面座位特區</h6>
              <p class="text-primary mb-0">NTD 5,800 / 4,800</p>
            </div>
            <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
          </div>
        </router-link>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">看台座位區</h6>
            <p class="text-primary mb-0">NTD 5,800 / 4,800 / 3,800 / 3,300 / 2,…</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h6 class="mb-1">VIP座位特區</h6>
            <p class="text-primary mb-0">NTD 6,800</p>
          </div>
          <p class="fs-5 text-secondary mb-0">熱賣中 ></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img-wrap-buy-ticket {
    width: 100%;
    height: 100%;
    max-width: 560px;
    max-height: 560px;
}
.choose-date {
    max-height: 400px;
    overflow: auto;
    padding-right: 15px;
        //軌道
        // &::-webkit-scrollbar-track {
        //     -webkit-box-shadow: 0
        // }
        //整體
        &::-webkit-scrollbar {
            width: 8px;
        background-color: var(--bs-gray-200);
        }
        //bar 本體
        &::-webkit-scrollbar-thumb {
            background-color: var(--primary-color);
        }
}
.soldout {
    opacity: 0.5;
}
</style>