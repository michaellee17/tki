import SectionLatestAuctions from "./SectionLatestAuctions.vue";

export default {
  component: SectionLatestAuctions,
  title: "Components/Organisms/Section/Latest Auctions",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionLatestAuctions },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionLatestAuctions v-bind="args" />',
});