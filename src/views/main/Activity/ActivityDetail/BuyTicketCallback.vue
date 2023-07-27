<template>
  callback
</template> 

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('user', ['getMemberData']),
    ...mapState('activity', ['routeActivityId']),
  },
  created() {
    console.log(this.$route.query);
    switch (this.$route.query.status) {
      /* 信用卡失敗 */
      case '0':
      console.log('push0')
        this.$router.push({ name: 'OrderHistory', params: { memberID: this.getMemberData.data.id } });
        break;
      /* 信用卡成功 */
      case '1':
      console.log('push1')
        this.$router.push({ name: 'MyTicket', params: { memberID: this.getMemberData.data.id } });
        break;
      /* ATM取號 */
      case '2':
        console.log('push2')
        this.$router.push({ name: 'BuyTicketPayment', params: { activityId: this.routeActivityId } });
        break;
      default:
        this.$router.push('/404');
        break;
    }
    // if(this.$route.query.status === 2) {
    //   this.$router.push({ name: 'BuyTicketPayment' });
    // }
  }
}
</script>