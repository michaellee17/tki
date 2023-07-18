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
        redirectURI: 'https://demo2.gcreate.com.tw/gc_tki/api/apple-login',
        state: 'tki',
        usePopup:false
      })
      AppleID.auth.signIn((res) => {
       
      });
    },
   },

}
</script>

<style scoped></style>