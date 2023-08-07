<template>
  <div id="accountLoginPage" ref="accountLoginPage">
    <div class="modal-body text-second pb-5">
      <div class="text-center mb-5">
        <h1 class="modal-title fs-2 text-primary mb-1">使用手機號碼登入</h1>
      </div>
      <form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <div class="mb-3">
          <div class="row justify-content-center align-items-center position-relative">
            <input
              id="loginTel" ref="loginTel" v-model="loginPhone" type="tel"
              class="form-control pe-5" placeholder="請輸入手機號碼"
              aria-describedby="tel">
            <div class="position-absolute icon">
              <font-awesome-icon :icon="['fas', 'phone-alt']" />
            </div>
          </div>
        </div>

        <div class="mb-4">
          <div class="row justify-content-center align-items-center position-relative">
            <input
              id="loginPassword" ref="loginPsw" v-model="loginPsw" type="password"
              class="form-control"
              placeholder="請輸入密碼" aria-describedby="password" minlength="8" required>
            <div class="position-absolute icon">
              <font-awesome-icon :icon="['fas', 'lock']" />
            </div>
          </div>
        </div>
        <div class="text-end mb-2">
          <a class="text-decoration-none link-secondary" @click="handleForget(true)">忘記密碼</a>
        </div>
        <button type="button" class="btn btn-primary link-light w-100 py-2 mb-3" @click="sendLogin">登入</button>

        <div class="text-center">
          <a class="text-decoration-none link-info" @click.prevent="changePage">回上一步</a>
        </div>
      </form>
    </div>
  </div>
  <Forget
    v-if="isForgetOpen" :open="isForgetOpen" @forget-hide="handleForget(false)"
    @after-forget="handleForget('close')" />
</template>
<script>
import Swal from "sweetalert2";
import Forget from "./Forget.vue";
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    Forget,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      errorMessage:'',
      isForgetOpen:false,
      //登入
      loginPhone: '',
      loginPsw: '',
    }
  },
  
  computed: {
    ...mapGetters('user', ['getLoginData']),
  },
  beforeUnmount() {
    this.enterKeyupDestroyed();
  },
  mounted(){
    this.enterKeyup();
    this.$refs.loginTel.focus();
  },
  methods: {
    //取出登入狀態
    ...mapActions('user', ['fetchMemberData', 'updateLoginStatus', 'updateLoginData', 'cleanMemberData']),
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
    //表單enter送出事件
    enterKey(event) {
      if (this.open && event.key === 'Enter') {
         this.sendLogin()
      } 
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
    handleForget(show){
      if(show === true){
        this.isForgetOpen = true
        this.$refs.accountLoginPage.classList.add('d-none')
      }else if(show === false){
        this.isForgetOpen = false
        this.$refs.accountLoginPage.classList.remove('d-none')
      }else if(show === 'close'){
        this.isForgetOpen =false
        this.$emit('after-forget')
      }
    },
    changePage(){
      this.$emit('hide-login')
    },
     //登入
     sendLogin() {
      const phoneRegex = /^[0-9]{10}$/; 
      if (!phoneRegex.test(this.loginPhone)) {
        this.errorMessage = '手機號碼格式不正確',
        this.$refs.loginTel.focus()
        return; 
      }
      const passwordRegex = /^[A-Za-z0-9@#_-]{8,255}$/;
      if (!passwordRegex.test(this.loginPsw)) {
        this.errorMessage = '密碼格式不符合要求',
        this.$refs.loginPsw.focus()
        return;
      }
      const apiUrl = `${process.env.VUE_APP_PATH}/user/login`;
      const requestData = {
        account: this.loginPhone,
        password: this.loginPsw,
      };
      this.axios.post(apiUrl, requestData)
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.errorMessage = ''
            this.loginPhone = '';
            this.loginPsw = '';
            const loginData = res.data;
            this.updateLoginData(loginData);
            this.$emit('after-login');
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.errorMessage = '資料格式錯誤'
            this.$refs.loginTel.focus()
          }
          if (res.data.status_code === 'USER_2011') {
            this.errorMessage = '登入失敗，驗證資訊錯誤'
            this.$refs.loginTel.focus()
          }
          if (res.data.status_code === 'USER_2012') {
            this.errorMessage = '登入失敗，帳號已被停權'
            this.$refs.loginTel.focus()
          }
        });

    },
  },

}
</script>
<style scoped>

</style>