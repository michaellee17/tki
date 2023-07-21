<template>
  <!-- 會員註冊 -->
  <div ref="memberInfoPage">
    <div class="modal-body text-second pb-5">
      <div class="text-center mb-5">
        <h1 class="modal-title fs-2 text-primary">註冊會員</h1>
      </div>
      <form>
        <div class="mb-3 row justify-content-center align-items-center">
          <label for="name" class="col-3 form-label  text-nowrap mr-2">會員姓名</label>
          <div class="col-9">
            <input
              id="name" v-model="registerName" type="text" class="form-control"
              placeholder="輸入姓名"
              aria-describedby="name" required>
          </div>
        </div>
        <div v-show="!isRegisterOTPVertify" class="mb-2 row justify-content-center align-items-center">
          <label for="tel" class="col-3 form-label  text-nowrap">手機號碼</label>
          <div class="col-9">
            <input
              id="tel" v-model="registerPhone" type="tel" class="form-control"
              placeholder="0912345678"
              aria-describedby="tel" minlength="10" required>
          </div>
        </div>
        <div v-if="!isRegisterOTPVertify" class="mb-2 row justify-content-center align-items-center">
          <p class="col-3" />
          <div class="col-9">
            <button
              v-if="!isRegisterOTPSend" class="btn btn-info link-light w-100" type="button"
              @click="sendOTP">
              發送驗證碼
            </button>
            <button v-if="isRegisterOTPSend" class="btn btn-info link-light w-100" disabled>
              有效時間:{{ remainingTime
              }}(秒)
            </button>
          </div>
        </div>
        <div v-if="isRegisterOTPSend && !isRegisterOTPVertify" class="mb-3 row justify-content-center align-items-center">
          <label for="code" class="col-3 form-label" />
          <div class="col-9 d-flex align-items-center gap-2">
            <input
              id="code" v-model="registerOTP" type="text" class="form-control"
              placeholder="輸入驗證碼"
              aria-describedby="code" required>
            <button type="button" class="btn btn-info link-light w-50" @click="vertifyOTP">驗證</button>
          </div>
        </div>
        <div class="mb-3 row justify-content-center align-items-center">
          <label for="password" class="col-3 form-label text-nowrap">密碼</label>
          <div class="col-9">
            <input
              id="password" v-model="registerPsw1" type="password" class="form-control"
              placeholder="需包含英數，至少8碼"
              aria-describedby="password" minlength="8" required>
          </div>
        </div>
        <div class="mb-4 row justify-content-center align-items-center">
          <label for="passwordCmf" class="col-3 form-label text-nowrap">確認密碼</label>
          <div class="col-9">
            <input
              id="passwordCmf" v-model="registerPsw2" type="password" class="form-control"
              placeholder="再次輸入密碼"
              aria-describedby="passwordCmf" minlength="8" required>
          </div>
        </div>
        <div class="text-end mb-2 d-flex">
          <a class="text-decoration-none link-secondary" @click="changePage">回上一步</a>
        </div>
        <button type="button" class="btn btn-primary link-light w-100 py-2" @click="sendRegister">送出</button>
      </form>
    </div>
  </div>
</template>
<script>
export default{
  mounted(){
    this.initLoginBoard()
  },
  methods:{
    initLoginBoard(){
      this.$refs.memberInfoPage.classList.add('d-none');
      this.$refs.memberInfoPage.classList.remove('active');
    },
    changePage(){
      this.$emit('switch-pages','memberInfoPage','loginBoard');
    },
  },
}
</script>
<style scoped lang="scss">
</style>