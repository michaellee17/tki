<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      isAppleVertify: false,
    }

  },
  mounted() {
    this.linkToApple();
    if (!this.AppleVertify) this.AppleAfterRedirect();
  },
  methods: {
    ...mapActions('user', ['updateLoginData']),
    linkToApple() {
      AppleID.auth.init({
        clientId: 'demo2.gcreate.com.tw',
        range: '姓名電子郵件',
        redirectURI: 'https://example-app.com/redirect',
        state: 'tki',
      })
      AppleID.auth.signIn();
    },
    AppleAfterRedirect() {
      if (this.$route.query.code) {

        const code = this.$route.query.code
        // 使用 require 引入模組的方式引入qs模組
        const qs = require('qs');
        // 定義必要的參數
        const authorizationCode = code;
        const clientId = 'demo2.gcreate.com.tw';
        const redirectUri = 'demo2.gcreate.com.tw/gc_tki_frontend/apple-login';
        const clientSecret = 'your_client_secret';
        const state = 'tki';

        // 發送POST請求
        fetch('https://appleid.apple.com/auth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            code: authorizationCode,
            client_id: clientId,
            redirect_uri: redirectUri,
            client_secret: clientSecret,
            state: state,
            grant_type: 'authorization_code',
          }),
        })
          .then(response => response.json())
          .then(data => {
            // 獲取存取令牌的回應
            const accessToken = data.access_token;
            console.log(aceesToken);
            // 在此處使用存取令牌進行後續操作，例如獲取用戶資訊等
          })
          .catch(error => {
            // 處理錯誤
            console.error(error);
          });

      }
    },
  },

}
</script>

<style scoped></style>