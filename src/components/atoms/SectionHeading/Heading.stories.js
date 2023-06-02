import Heading from "./Heading.vue";

export default {
  component: Heading,
  title: "Components/Atoms/Section Heading",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Heading },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Heading v-bind="args" />',
});

Default.args = {
  title: "This is the title",
  subtitle: "Bring to the table win-win survival strategies to ensure…"
};
