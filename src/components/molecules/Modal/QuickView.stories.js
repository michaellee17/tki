import QuickView from "./QuickView.vue";

export default {
  component: QuickView,
  title: "Components/Molecules/Modal/QuickView",
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Default = (args) => ({
  components: { QuickView },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `    
  <QuickView style="width:60%;" class="mx-auto" v-bind="args"/>`,
});

Default.args = {
  "id": 1,
  "photos": [
    "images/products/electronic.jpg",
    "images/products/smartTv.jpg"
  ],
  "endDate": "5/Aug/2021",
  "name": "Auto Bidding (Proxy)",
  "sku": "MT034",
  "condition": "Used",
  "directBuyPrice": 1399.99,
  "categories": [
    { "name": "Phones" },
    { "name": "Smartphone" },
    { "name": "5G" },
    { "name": "Snapdragon" }
  ],
  "tags": [
    { "name": "sales" },
    { "name": "black friday" },
    { "name": "hot" }
  ],
  "type": "auction"
};
