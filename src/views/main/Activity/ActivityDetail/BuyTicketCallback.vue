<template>
  callback
</template> 

<script>
export default {
  created() {
    console.log(this.$route.query);
    switch (this.$route.query.status) {
      /* 信用卡失敗 */
      case 0:
        this.$router.push({ name: 'OrderHistory' });
        break;
      /* 信用卡成功 */
      case 1:
        this.$router.push({ name: 'MyTicket' });
        break;
      /* ATM取號 */
      case 2:
        this.$router.push({ name: 'BuyTicketPayment' });
        break;
      default:
        break;
    }
    // if(this.$route.query.status === 2) {
    //   this.$router.push({ name: 'BuyTicketPayment' });
    // }
  }
}
</script>