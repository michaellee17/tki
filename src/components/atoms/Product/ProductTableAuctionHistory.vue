<template>
  <table class="table border-top border-start border-end border-bottom">
    <thead>
      <tr class="border-bottom">
        <th scope="col" class="border-end">Date</th>
        <th scope="col" class="border-end">Bid</th>
        <th scope="col" class="border-end">User</th>
        <th scope="col" class="border-end">Auto</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="auction in latestAuctions" :key="auction">
        <td>{{ $formatDate(auction.date) }}</td>
        <td><b>{{ $formatPrice(auction.amount) }}</b></td>
        <td>{{ auction.user }}</td>
        <td>{{ auction.auto }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    latestAuctions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
td {
  width: 20%;
}
th, td {
  border: 0;
}
</style>