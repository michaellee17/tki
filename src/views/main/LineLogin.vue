<script>
import { mapActions} from 'vuex';
export default {
  data(){
    return{
      isLineVertify:false,
    }
    
  },
  mounted() {
    let linelinked = localStorage.getItem('linelinked')
    if(!linelinked)this.linkToLine();
    this.lineAfterRedirect();
  },
  methods: {
    ...mapActions('user', ['updateLoginData']),
    linkToLine() {
      const client_id = process.env.VUE_APP_LINE_CLIENT_ID;
      const redirect_uri = process.env.VUE_APP_LINE_REDIRECT_URI;
      let link = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=login&scope=openid%20profile`;
      localStorage.setItem('linelinked',true)
      window.location.href = link;
    },
    async lineAfterRedirect() {
      if (this.$route.query.code) {
        try {
          const code = this.$route.query.code
          // 使用 require 引入模組的方式引入qs模組
          const qs = require('qs');
          const client_id = '2000112185';
          const redirect_uri = process.env.VUE_APP_LINE_REDIRECT_URI;
          const client_secret = process.env.VUE_APP_LINE_CLIENT_SECRET;
          const tokenResponse = await this.axios.post('https://api.line.me/oauth2/v2.1/token', qs.stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri,
            client_id,
            client_secret
          }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          });
          const accessToken = tokenResponse.data.access_token;
          const idToken = tokenResponse.data.id_token;

          const userInfoResponse = await this.axios.post('https://api.line.me/oauth2/v2.1/verify', qs.stringify({
            id_token: idToken,
            client_id: client_id
          }), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Bearer ' + accessToken
            }
          });
          const lineUserId = userInfoResponse.data.sub;
          this.isLineVertify = true;
          localStorage.removeItem('linelinked')
          localStorage.setItem('lineUserId',lineUserId);
          self.close();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },

}
</script>

<style scoped></style>