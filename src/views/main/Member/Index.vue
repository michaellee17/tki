<template>
  <div>
    <div class="d-flex flex-wrap gap-3 mb-3">
      <router-link to="/about" class="member-tab">
        <div class=" d-flex justify-content-center gap-3 align-items-center py-3 px-4 bg-primary-light rounded">
          <div
            class="bg-white star-wrap rounded-circle d-flex justify-content-center align-items-center
          text-primary fs-2">
            ★
          </div>
          <p>關於我們</p>
        </div>
      </router-link>
      <router-link to="/contact" class="member-tab">
        <div class=" d-flex justify-content-center gap-3 align-items-center py-3 px-4 bg-primary-light rounded">
          <div
            class="bg-white star-wrap rounded-circle d-flex justify-content-center align-items-center
          text-primary fs-2">
            ★
          </div>
          <p>聯絡我們</p>
        </div>
      </router-link>
    </div>
    <div class="d-flex flex-wrap gap-3">
      <router-link to="/service-terms" class="member-tab">
        <div class=" d-flex justify-content-center gap-3 align-items-center py-3 px-4 bg-primary-light rounded">
          <div
            class="bg-white star-wrap rounded-circle d-flex justify-content-center align-items-center
          text-primary fs-2">
            ★
          </div>
          <p>用戶服務條款</p>
        </div>
      </router-link>
      <router-link to="/privacy-terms" class="member-tab">
        <div class=" d-flex justify-content-center gap-3 align-items-center py-3 px-4 bg-primary-light rounded">
          <div
            class="bg-white star-wrap rounded-circle d-flex justify-content-center align-items-center
          text-primary fs-2">
            ★
          </div>
          <p>隱私權條款</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.star-wrap {
  width: 50px;
  height: 50px;
}
p {
  margin-bottom: 0;
}
.member-tab {
  width: 230px;
  & p {
    color: #000;
  }
  & p:hover {
    color: var(--primary-color);
  }
}
</style>