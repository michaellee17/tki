import SectionLatestAuctionsWithCategoryName from "./SectionLatestAuctionsWithCategoryName.vue";

export default {
  component: SectionLatestAuctionsWithCategoryName,
  title: "Components/Organisms/Section/Latest Auctions With Category Name",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { SectionLatestAuctionsWithCategoryName },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionLatestAuctionsWithCategoryName v-bind="args" />',
});

Default.args = {
  title: 'Phones'
}