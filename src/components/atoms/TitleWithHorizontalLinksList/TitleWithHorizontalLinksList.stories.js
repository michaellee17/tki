import TitleWithHorizontalLinksList from "./TitleWithHorizontalLinksList.vue";

export default {
  component: TitleWithHorizontalLinksList,
  title: "Components/Atoms/Title With Horizontal Links List",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { TitleWithHorizontalLinksList },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<TitleWithHorizontalLinksList v-bind="args" />',
});
Default.args = {
  title: "Useful Links",
  links: [
    { name: "Mobile Phone", location: "#" },
    { name: "Laptop", location: "#" },
    { name: "Headphone", location: "#" },
  ],
};
