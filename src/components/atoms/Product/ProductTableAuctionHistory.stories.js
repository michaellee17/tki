import ProductTableAuctionHistory from "./ProductTableAuctionHistory.vue";

export default {
  component: ProductTableAuctionHistory,
  title: "Components/Atoms/Product/AuctionHistoryTable",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { ProductTableAuctionHistory },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<ProductTableAuctionHistory style="min-width:600px;" v-bind="args" />',
});

Default.args = {
  latestAuctions: [
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"},
    {date: "25-02-2021", amount: 25, user: "Utilizator1", auto: "Auto"}
  ]
}