<template>
  <h3 class="text-primary mb-4">會員資訊</h3>
  <ul class="row flex-column member-info">
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <div class="d-flex justify-content-between">
        <p class="fs-18">姓名</p>
        <a v-if="!isNameEdit" class="text-primary edit" @click="handleEdit('name')">編輯</a>
        <div v-if="isNameEdit" class="d-flex gap-2">
          <a class="text-primary edit" @click="isNameEdit = false">返回</a>
          <a class="text-primary edit" @click="updateProfile('name')">保存</a>
        </div>
      </div>
      <p v-show="!isNameEdit">{{ memberData.full_name }}</p>
      <input v-show="isNameEdit" ref="memberName" class="mb-0 text-gray-800" :value="memberData.full_name">
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <div class="d-flex justify-content-between">
        <p class="fs-18">身分證字號</p>
        <a v-if="!isIdentityEdit" class="text-primary edit" @click="handleEdit('ID')">編輯</a>
        <div v-if="isIdentityEdit" class="d-flex gap-2">
          <a class="text-primary edit" @click="isIdentityEdit = false">返回</a>
          <a class="text-primary edit" @click="updateProfile('ID')">保存</a>
        </div>
      </div>
      <p v-show="!isIdentityEdit">{{ identification }}</p>
      <input v-show="isIdentityEdit" ref="memberID" class="mb-0 text-gray-800" :value="memberData.identification">
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <div class="d-flex justify-content-between">
        <p class="fs-18">密碼</p>
        <a v-if="!passwordChange" class="text-primary edit" @click="passwordChange = !passwordChange">編輯</a>
        <div v-if="passwordChange" class="d-flex gap-2">
          <a class="text-primary edit" @click="passwordChange = false">返回</a>
          <a class="text-primary edit" @click="sendPswChange">保存</a>
        </div>
      </div>
      <p v-if="!passwordChange" class="fs-18">********</p>
      <div v-if="passwordChange">
        <div class="d-flex gap-2 align-items-center mb-2">
          <input v-model="oldPsw" type="password" placeholder="輸入舊密碼" class="mb-0 text-gray-800 mb-1">
        </div>
        <div class="d-flex gap-2 align-items-center mb-2">
          <input v-model="newPsw" type="password" placeholder="輸入新密碼" class="mb-0 text-gray-800 mb-1">
        </div>
        <div class="d-flex gap-2 align-items-center mb-2">
          <input v-model="newPsw2" type="password" placeholder="確認新密碼" class="mb-0 text-gray-800 mb-1">
        </div>
      </div>
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <p class="fs-18">手機驗證</p>
      <div class="d-flex justify-content-between text-secondary">
        <p>{{ memberData.account }}</p>
      </div>
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <div class="d-flex justify-content-between">
        <p class="fs-18">電子信箱</p>
        <a v-if="!isEmailEdit" class="text-primary edit" @click="handleEdit('email')">編輯</a>
        <div v-if="isEmailEdit" class="d-flex gap-2">
          <a class="text-primary edit" @click="isEmailEdit = false">返回</a>
          <a class="text-primary edit" @click="updateProfile('email')">保存</a>
        </div>
      </div>
      <p v-show="!isEmailEdit">{{ memberEmail }}</p>
      <input v-show="isEmailEdit" ref="memberEmail" class="mb-0 text-gray-800" :value="memberData.email">
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <p class="fs-18">社群綁定</p>
      <ul class="text-center d-flex justify-content-between px-0">
        <li v-if="googleBinding === false">
          <GoogleLogin :callback="callback" popup-type="TOKEN">
            <img src="../../../assets/images/icons/google.png" width="25" class="mb-1" alt="google">
            <a class="text-gray-800 d-block">尚未綁定</a>
          </GoogleLogin>
        </li>
        <li v-if="googleBinding === true" @click="handleGooleUnbinding">
          <img src="../../../assets/images/icons/google.png" width="25" alt="google">
          <a class="text-gray-800 d-block">解除綁定</a>
        </li>
        <li v-if="lineBinding === false" @click="lineVertify">
          <img src="../../../assets/images/icons/line.png" width="26" alt="line">
          <a class="text-gray-800 d-block">尚未綁定</a>
        </li>
        <li v-if="lineBinding === true" @click="handleLineUnbinding">
          <img src="../../../assets/images/icons/line.png" width="26" alt="line">
          <a class="text-gray-800 d-block">解除綁定</a>
        </li>
        <li v-if="appleBinding === false" @click="triggerApple">
          <img src="../../../assets/images/icons/apple.png" width="25" alt="apple">
          <a class="text-gray-800 d-block">尚未綁定</a>
        </li>
        <li v-if="appleBinding === true" @click="handleAppleUnbinding">
          <img src="../../../assets/images/icons/apple.png" width="25" alt="apple">
          <a class="text-gray-800 d-block">解除綁定</a>
        </li>
      </ul>
    </li>
  </ul>
  <MessageModal ref="passwordModal" :error="true">
    <p class="mb-0">兩次輸入的密碼不同</p>
  </MessageModal>
  <MessageModal ref="passwordSuccess" :success="true">
    <p class="mb-0">修改密碼成功</p>
  </MessageModal>
  <MessageModal ref="passwordError" :error="true">
    <p class="mb-0">資料不完整</p>
  </MessageModal>
  <MessageModal ref="passwordError2" :error="true">
    <p class="mb-0">舊密碼錯誤</p>
  </MessageModal>
  <MessageModal ref="passwordError3" :error="true">
    <p class="mb-0">密碼格式不符</p>
  </MessageModal>
  <MessageModal ref="profileError" :error="true">
    <p class="mb-0">姓名格式不符合</p>
  </MessageModal>
  <MessageModal ref="profileError2" :error="true">
    <p class="mb-0">信箱格式不符合</p>
  </MessageModal>
  <MessageModal ref="profileError3" :error="true">
    <p class="mb-0">身分證格式不符合</p>
  </MessageModal>
  <MessageModal ref="profileError4" :error="true">
    <p class="mb-0">請輸入信箱資料</p>
  </MessageModal>
  <MessageModal ref="profileError5" :error="true">
    <p class="mb-0">請輸入身份證字號</p>
  </MessageModal>
  <MessageModal ref="profileSuceess" :success="true">
    <p class="mb-0">更新資料成功</p>
  </MessageModal>
  <MessageModal ref="bindingSuceess" :success="true">
    <p class="mb-0">綁定成功</p>
  </MessageModal>
  <MessageModal ref="unbindingSuceess" :success="true">
    <p class="mb-0">解綁成功</p>
  </MessageModal>
  <MessageModal ref="unbindGoogle" :warning="true">
    <p class="mb-0">請確認是否解除綁定？</p>
    <div class="mt-4 d-flex justify-content-around">
      <button type="button" class="btn btn-cancel px-4" @click="closeGoogle">取消</button>
      <button type="button" class=" btn btn-outline-primaryB px-4" @click="googleUnbind">確認</button>
    </div>
  </MessageModal>
  <MessageModal ref="unbindLine" :warning="true">
    <p class="mb-0">請確認是否解除綁定？</p>
    <div class="mt-4 d-flex justify-content-around">
      <button type="button" class="btn btn-cancel px-4" @click="closeLine">取消</button>
      <button type="button" class=" btn btn-outline-primaryB px-4" @click="lineUnbind">確認</button>
    </div>
  </MessageModal>
  <MessageModal ref="unbindApple" :warning="true">
    <p class="mb-0">請確認是否解除綁定？</p>
    <div class="mt-4 d-flex justify-content-around">
      <button type="button" class="btn btn-cancel px-4" @click="closeApple">取消</button>
      <button type="button" class=" btn btn-outline-primaryB px-4" @click="appleUnbind">確認</button>
    </div>
  </MessageModal>
</template>
<script>
import MessageModal from '../../../components/gc/MessageModal.vue';
import { mapGetters, mapActions } from 'vuex';
import Swal from "sweetalert2";
export default {
  components:{
    MessageModal,
  },
  data() {
    return {
      passwordChange:false,
      oldPsw:'',
      newPsw:'',
      newPsw2:'',
      fullName:'',
      email:'',
      isNameEdit:false,
      isEmailEdit:false,
      isIdentityEdit: false
    }
  },
  computed: {
    ...mapGetters('user', ['getMemberData', 'getLoginData', 'getMemberBinding']),
    memberData() {
      return this.getMemberData.data;
    },
    fullname() {
      return this.memberData ? this.memberData.full_name : ''
    },
    googleBinding() {
      return this.getMemberBinding[0]
    },
    lineBinding() {
      return this.getMemberBinding[1]
    },
    appleBinding() {
      return this.getMemberBinding[2]
    },
    identification(){
      return this.memberData.identification ? this.memberData.identification : '無資料'
    },
    memberEmail(){
      return this.memberData.email ? this.memberData.email : '無資料'
    },
  },
  beforeUnmount() {
    this.enterKeyupDestroyed();
  },
  mounted() {
    this.enterKeyup();
  },
  methods: {
    //vuex取出actions
    ...mapActions('user', ['updateBindingData', 'bindSuccessData','updateMemberName','updateMemberEmail','updateMemberID']),
    //控制下拉區塊不重複顯示
    handleEdit(target){
      //target === 'name'印出布林值再賦值給isNameEdit
      this.isNameEdit = target === 'name';
      this.isIdentityEdit = target === 'ID';
      this.isEmailEdit = target === 'email';
    },
    enterKeyup() {
      document.addEventListener("keyup", this.enterKey);
    },
    //表單enter送出事件
    enterKey(event) {
      if (event.key === 'Enter') {
          if(this.isNameEdit){
            this.updateProfile('name')
          }else if(this.isEmailEdit){
            this.updateProfile('email')
          }else if(this.isIdentityEdit){
            this.updateProfile('ID')
          }else if(this.passwordChange){
            this.sendPswChange()
          }
        } 
    },
    enterKeyupDestroyed() {
      document.removeEventListener("keyup", this.enterKey);
    },
    //送出密碼修改
    sendPswChange(){
      const apiUrl = `${process.env.VUE_APP_PATH}/user/reset_password`;
      if(this.newPsw !== this.newPsw2){
        this.$refs.passwordModal.showModal()
        return
      }
      const requestData = {
        password:this.oldPsw,
        newPassword:this.newPsw
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.$refs.passwordSuccess.showModal()
            this.passwordChange = false;
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.$refs.passwordError.showModal()
          }
          if (res.data.status_code === 'USER_2051') {
            this.$refs.passwordError2.showModal()
          }
          if (res.data.status_code === 'USER_2022') {
            this.$refs.passwordError3.showModal()
          }
        });
    },
    //更新會員姓名和email
    updateProfile(target) {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/update_info`;
      let fullname = this.$refs.memberName.value
      let email = this.$refs.memberEmail.value
      let ID = this.$refs.memberID.value
      if (fullname && !/^[\u4e00-\u9fa5a-zA-Z\s]+$/.test(fullname)) {
        this.$refs.profileError.showModal()
        return;
      }
      if (email && !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        this.$refs.profileError2.showModal()
        return;
      }
      if (ID && !/^[A-Z]\d{9}$/.test(ID)) {
        this.$refs.profileError3.showModal()
        return;
      }
      if(target === 'email' && email === ''){
        this.$refs.profileError4.showModal()
        return;
      }
      if(target === 'ID' && ID === ''){
        this.$refs.profileError5.showModal()
        return;
      }
      const requestData = {
        full_name: fullname,
        email:email,
        identification:ID
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.$refs.profileSuceess.showModal()
            if(target === 'name'){
              this.isNameEdit = false;
              this.updateMemberName(fullname)
            }
            if(target === 'email'){
              this.isEmailEdit = false
              this.updateMemberEmail(email)
            }
            if(target === 'ID'){
              this.isIdentityEdit = false
              this.updateMemberID(ID)
            }
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.$refs.passwordError.showModal()
          }
          if (res.data.status_code === 'USER_2023') {
            this.$refs.profileError.showModal()
          }
          if (res.data.status_code === 'USER_2024') {
            this.$refs.profileError2.showModal()
          }
        });
    },
    handleAppleUnbinding(){
      this.$refs.unbindApple.showModal()
    },
    closeApple(){
      this.$refs.unbindApple.hideModal()
    },
    //apple解綁
    appleUnbind() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/unbind_platform`;
      const requestData = {
        method: "Apple"
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.$refs.unbindingSuceess.showModal()
            this.updateBindingData(2);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.$refs.passwordError.showModal()
          }
        });
    },
    //觸發apple綁定
    triggerApple() {
      const router = this.$router;
      const routePath = '/apple-login'; // 替換為您的路徑
      const fullPath = router.resolve(routePath).href;
      const windowFeatures = 'width=500,height=600';
      const appleWindow = window.open(fullPath, 'line登入', windowFeatures);
      this.startListeningForAppleID(appleWindow);
    },
    startListeningForAppleID(appleWindow) {
      const appleIDpulling = setInterval(() => {
        if (appleWindow.closed) {
          clearInterval(appleIDpulling);
          const appleID = localStorage.getItem('appleID');
          if (appleID) {
            const apiUrl = `${process.env.VUE_APP_PATH}/user/binding_platform`;
            const requestData = {
              platform_id: appleID,
              method: "Apple"
            };
            const accessToken = this.getLoginData.access_token
            this.axios.post(apiUrl, requestData, {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            })
              .then(res => {
                if (res.data.status_code === 'SYSTEM_1000') {
                  this.closeApple()
                  this.$refs.bindingSuceess.showModal()
                  this.bindSuccessData(2);
                }
                if (res.data.status_code === 'SYSTEM_1001') {
                  this.$refs.passwordError.showModal()
                }
                localStorage.removeItem('appleID');
              });
          }
        }
      }, 1000);
    },
    handleGooleUnbinding(){
      this.$refs.unbindGoogle.showModal()
    },
    closeGoogle(){
      this.$refs.unbindGoogle.hideModal()
    },
    //GOOGLE解綁
    googleUnbind() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/unbind_platform`;
      const requestData = {
        method: "Google"
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.closeGoogle()
            this.$refs.unbindingSuceess.showModal()
            this.updateBindingData(0);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.$refs.passwordError.showModal()
          }
        });
    },
    handleLineUnbinding(){
      this.$refs.unbindLine.showModal()
    },
    closeLine(){
      this.$refs.unbindLine.hideModal()
    },
    //line解綁
    lineUnbind() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/unbind_platform`;
      const requestData = {
        method: "Line"
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.closeLine()
            this.$refs.unbindingSuceess.showModal()
            this.updateBindingData(1);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.$refs.passwordError.showModal()
          }
        });
    },
    lineVertify() {
      const router = this.$router;
      const routePath = '/line-login'; // 替換為您的路徑
      const fullPath = router.resolve(routePath).href;
      const windowFeatures = 'width=500,height=600';
      const newWindow = window.open(fullPath, 'line登入', windowFeatures);
      this.startListeningForLineId(newWindow);
    },
    //監聽回傳的lineid若有值的時候幫他綁定
    startListeningForLineId(newWindow) {
      const lineIdPolling = setInterval(() => {
        if (newWindow.closed) {
          localStorage.removeItem('linelinked')
          clearInterval(lineIdPolling);
          const lineUserId = localStorage.getItem('lineUserId');
          if (lineUserId) {
            const apiUrl = `${process.env.VUE_APP_PATH}/user/binding_platform`;
            const requestData = {
              platform_id: lineUserId,
              method: "Line"
            };
            const accessToken = this.getLoginData.access_token
            this.axios.post(apiUrl, requestData, {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            })
              .then(res => {
                if (res.data.status_code === 'SYSTEM_1000') {
                  this.$refs.bindingSuceess.showModal()
                  this.bindSuccessData(1);
                }
                if (res.data.status_code === 'SYSTEM_1001') {
                  this.$refs.passwordError.showModal()
                }
                localStorage.removeItem('lineUserId');
              });
          }
        }
      }, 1000);
    },
    //google取得token
    callback(response) {
      //使用取得的accesstoken再打一次google api取得google id
      const accessToken = response.access_token;
      this.axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(response => {
          const googleId = response.data.id;
          if (googleId) {
            this.googleBind(googleId);
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    //google綁定
    googleBind(googleId) {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/binding_platform`;
      const requestData = {
        platform_id: googleId,
        method: "Google"
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            this.$refs.bindingSuceess.showModal()
            this.bindSuccessData(0);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            this.$refs.passwordError.showModal()
          }
        });
    },
  },
}
</script>
<style scoped lang="scss">
input {
  border: 1px solid var(--primary-light-color);
  border-radius: 5px;
  background-color: transparent;
  padding: 5px 10px;
  &::placeholder {
    color: var(--secondary-color)!important;
  }
  &:focus {
    border: 1px solid var(--primary-color);
  }
}
.edit {
  font-size: 14px;
}
.member-info > li {
  background-color: rgba(245, 116, 46, 6%);
  width: 330px;
  & input {
    width: 100%;
  }
}
.unbind{
  width: 90px;
}
.unbind:hover{
  color:white;
}
</style>