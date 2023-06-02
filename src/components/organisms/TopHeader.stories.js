import TopHeader from "./TopHeader.vue";

export default {
  component: TopHeader,
  title: "Components/Organisms/TopHeader",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { TopHeader },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<TopHeader v-bind="args" />',
});