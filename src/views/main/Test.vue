<!-- google 登入錯誤 -->
<!-- <template>
  <div>
    <LayoutDefault>
      test
      <div
        id="g_id_onload"
        data-client_id="798464361257-fmcsqfgvjfu8bvbp73mnll0gl5vrlf4v.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-login_uri="http://localhost:8080/gc_tki_frontend/member/index"
        data-itp_support="true" />

      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
        data-width="250" />
    </LayoutDefault>
  </div>
</template>

<script>
import LayoutDefault from "../../components/organisms/LayoutDefault/LayoutDefault.vue"

export default {
    components: { LayoutDefault } 
}
</script> -->

<!-- google 登入 -->
<template>
    <div ref="googleLoginBtn" />
   </template>
   <script>
     export default{
       mounted() {
         const gClientId = '798464361257-fmcsqfgvjfu8bvbp73mnll0gl5vrlf4v.apps.googleusercontent.com'
         window.google.accounts.id.initialize({
           client_id: gClientId,
           callback: this.handleCredentialResponse,
           auto_select: true
         })
         window.google.accounts.id.renderButton(
           this.$refs.googleLoginBtn, {
             text: 'signin_with', // or 'signup_with' | 'continue_with' | 'signin'
             size: 'large', // or 'small' | 'medium'
             width: '366', // max width 400
             theme: 'outline', // or 'filled_black' |  'filled_blue'
             logo_alignment: 'left' // or 'center'
           }
         )
       },
       methods: {
         async handleCredentialResponse(response) {
            console.log(response)
            // Put your backend code in here
         }
       }
     }
   </script>