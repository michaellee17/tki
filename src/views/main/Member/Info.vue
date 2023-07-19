<template>
  <h3 class="text-primary mb-4">會員資訊</h3>
  <ul class="row flex-column member-info">
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <div class="d-flex justify-content-between">
        <p class="fs-18">姓名</p>
        <a class="text-primary edit" @click="updateProfile">編輯</a>
      </div>
      <input ref="memberName" class="mb-0 text-gray-800" :value="memberData.full_name">
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <div class="d-flex justify-content-between">
        <p class="fs-18">密碼</p>
        <a class="text-primary edit" @click="passwordChange = !passwordChange">編輯</a>
      </div>
      <p v-if="!passwordChange" class="fs-18">********</p>
      <div v-if="passwordChange">
        <div class="d-flex gap-2 align-items-center mb-2 ">
          <span class="fs-16">輸入舊密碼：</span>
          <input v-model="oldPsw" type="password" class="mb-0 text-gray-800 mb-1">
        </div>
        <div class="d-flex gap-2 align-items-center mb-2">
          <span class="fs-16">輸入新密碼：</span>
          <input v-model="newPsw" type="password" class="mb-0 text-gray-800 mb-1">
        </div>
        <div class="d-flex gap-2 align-items-center mb-2">
          <span class="fs-16">確認新密碼：</span>
          <input v-model="newPsw2" type="password" class="mb-0 text-gray-800 mb-1">
        </div>
        <div class="pt-2">
          <button class="btn-sm btn-primary" @click="sendPswChange">送出</button>
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
        <a class="text-primary edit" @click="updateProfile">編輯</a>
      </div>
      <input ref="memberEmail" class="mb-0 text-gray-800" :value="memberData.email">
    </li>
    <li class="col-md-10 col-lg-6 py-3 px-4 mb-3 rounded">
      <p class="fs-18">社群綁定</p>
      <ul class="text-center d-flex justify-content-between px-0">
        <li v-if="googleBinding === false">
          <GoogleLogin :callback="callback" popup-type="TOKEN">
            <img src="../../../assets/images/icons/google.png" width="25" alt="google">
            <p class="mb-0 text-gray-800">尚未綁定</p>
          </GoogleLogin>
        </li>
        <li v-if="googleBinding === true" @click="gooleUnbind">
          <img src="../../../assets/images/icons/google.png" width="25" alt="google">
          <p class="mb-0 text-gray-800">解除綁定</p>
        </li>
        <li v-if="lineBinding === false" @click="lineVertify">
          <img src="../../../assets/images/icons/line.png" width="26" alt="line">
          <p class="mb-0 text-gray-800">尚未綁定</p>
        </li>
        <li v-if="lineBinding === true" @click="lineUnbind">
          <img src="../../../assets/images/icons/line.png" width="26" alt="line">
          <p class="mb-0 text-gray-800">解除綁定</p>
        </li>
        <li v-if="appleBinding === false" @click="triggerApple">
          <img src="../../../assets/images/icons/apple.png" width="25" alt="apple">
          <p class="mb-0 text-gray-800">尚未綁定</p>
        </li>
        <li v-if="appleBinding === true" @click="appleUnbind">
          <img src="../../../assets/images/icons/apple.png" width="25" alt="apple">
          <p class="mb-0 text-gray-800">解除綁定</p>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import Swal from "sweetalert2";
export default {
  data() {
    return {
      passwordChange:false,
      oldPsw:'',
      newPsw:'',
      newPsw2:'',
      fullName:'',
      email:'',
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
  },
  mounted() {
  },
  methods: {
    //vuex取出actions
    ...mapActions('user', ['updateBindingData', 'bindSuccessData','updateMemberName','updateMemberEmail']),
    //送出密碼修改
    sendPswChange(){
      const apiUrl = `${process.env.VUE_APP_PATH}/user/reset_password`;
      if(this.newPsw !== this.newPsw2){
        Swal.fire({
              icon: 'error',
              title: '兩次輸入的新密碼不同',
        });
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
            Swal.fire({
              icon: 'success',
              title: '修改密碼成功！',
            });
            this.passwordChange = false;
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
            });
          }
          if (res.data.status_code === 'USER_2051') {
            Swal.fire({
              icon: 'error',
              title: '舊密碼錯誤',
            });
          }
          if (res.data.status_code === 'USER_2022') {
            Swal.fire({
              icon: 'error',
              title: '密碼格式不符',
            });
          }
        });
    },
    //更新會員姓名和email
    updateProfile() {
      const apiUrl = `${process.env.VUE_APP_PATH}/user/update_info`;
      let fullname = this.$refs.memberName.value
      let email = this.$refs.memberEmail.value
      if (fullname && !/^[\u4e00-\u9fa5a-zA-Z\s]+$/.test(fullname)) {
        Swal.fire({
          icon: 'error',
          title: '姓名格式不符合',
        });
        return;
      }
      // 验证email格式是否正确
      if (email && !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        Swal.fire({
          icon: 'error',
          title: '邮箱格式不符合',
        });
        return;
      }
      const requestData = {
        full_name: fullname,
        email:email
      };
      const accessToken = this.getLoginData.access_token
      this.axios.post(apiUrl, requestData, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
        .then(res => {
          if (res.data.status_code === 'SYSTEM_1000') {
            Swal.fire({
              icon: 'success',
              title: '更新資料成功！',
            });
            this.updateMemberName(fullname)
            this.updateMemberEmail(email)
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
            });
          }
          if (res.data.status_code === 'USER_2023') {
            Swal.fire({
              icon: 'error',
              title: '姓名格式不符合',
            });
          }
          if (res.data.status_code === 'USER_2024') {
            Swal.fire({
              icon: 'error',
              title: '信箱格式不符合',
            });
          }
        });
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
            Swal.fire({
              icon: 'success',
              title: '解除綁定成功！',
            });
            this.updateBindingData(2);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
            });
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
                  Swal.fire({
                    icon: 'success',
                    title: '綁定成功！',
                  });
                  this.bindSuccessData(2);
                }
                if (res.data.status_code === 'SYSTEM_1001') {
                  Swal.fire({
                    icon: 'error',
                    title: '資料不完整',
                  });
                }
                localStorage.removeItem('appleID');
              });
          }
        }
      }, 1000);
    },
    //GOOGLE解綁
    gooleUnbind() {
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
            Swal.fire({
              icon: 'success',
              title: '解除綁定成功！',
            });
            this.updateBindingData(0);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
            });
          }
        });
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
            Swal.fire({
              icon: 'success',
              title: '解除綁定成功！',
            });
            this.updateBindingData(1);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
            });
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
                  Swal.fire({
                    icon: 'success',
                    title: '綁定成功！',
                  });
                  this.bindSuccessData(1);
                }
                if (res.data.status_code === 'SYSTEM_1001') {
                  Swal.fire({
                    icon: 'error',
                    title: '資料不完整',
                  });
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
            Swal.fire({
              icon: 'success',
              title: '綁定成功！',
            });
            this.bindSuccessData(0);
          }
          if (res.data.status_code === 'SYSTEM_1001') {
            Swal.fire({
              icon: 'error',
              title: '資料不完整',
            });
          }
        });
    },
  },
}
</script>
<style scoped>
input {
  border: 1px solid var(--primary-color);
  background-color: transparent;
  padding: 5px 10px;
}
.edit {
  font-size: 14px;
}
.member-info > li {
  background-color: rgba(245, 116, 46, 6%);
}
</style>