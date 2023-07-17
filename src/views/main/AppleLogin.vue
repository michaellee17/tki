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
  },
  methods: {
    ...mapActions('user', ['updateLoginData']),
    linkToApple() {
      AppleID.auth.init({
        clientId: 'demo2.gcreate.com.tw',
        scope: 'name email',
        redirectURI: 'https://demo2.gcreate.com.tw/gc_tki_frontend/apple-login',
        state: 'tki',
        usePopup:false
      })
      
      AppleID.auth.signIn((res) => {
        if (res.authorization && res.authorization.code) {
          const postData = {
            code: res.authorization.code,
            
          };
          console.log(code);
          // 向后端发送POST请求
          axios.post('/your-api-endpoint', postData)
            .then(response => {
            
              const data = response.data;
              
            })
            .catch(error => {
              
              console.error(error);
            });
        }
      });
    },
   },

}
</script>

<style scoped></style>