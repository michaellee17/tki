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
        clientId: process.env.VUE_APP_APPLE_CLIENT_ID,
        scope: 'name email',
        redirectURI: process.env.VUE_APP_APPLE_REDIRECTURI,
        state: 'tki',
        usePopup:false
      })
      AppleID.auth.signIn();
    },
   },

}
</script>

<style scoped></style>