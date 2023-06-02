import BannerMasonry from "./BannerMasonry.vue";

export default {
  component: BannerMasonry,
  title: "Components/Molecules/Banner/Masonry",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { BannerMasonry },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<BannerMasonry style="width:500px;" v-bind="args"/>',
});
Default.args = {
  title: "Phones",
  productsNo: 23,
  height: 300,
  imageSrc:
    "/images/masonrybanner/masonry-banner-3.jpg",
};
