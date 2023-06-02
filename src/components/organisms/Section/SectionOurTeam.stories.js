import SectionOurTeam from "./SectionOurTeam.vue";

export default {
  component: SectionOurTeam,
  title: "Components/Organisms/Section/Our Team",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { SectionOurTeam },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<SectionOurTeam v-bind="args" />',
});