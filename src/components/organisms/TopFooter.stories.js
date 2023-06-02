import TopFooter from "./TopFooter.vue";

export default {
  component: TopFooter,
  title: "Components/Organisms/TopFooter",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { TopFooter },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<TopFooter v-bind="args" />',
});