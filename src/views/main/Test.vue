<!-- google 登入 -->
<!-- <template>
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
</script> -->

<template>
  <div></div>
</template>