import PageHeader from "./PageHeader.vue";

export default {
  component: PageHeader,
  title: "Components/Organisms/PageHeader",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { PageHeader },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<PageHeader v-bind="args" />',
});