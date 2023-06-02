import Logo from "./Logo.vue";

export default {
  component: Logo,
  title: "Components/Atoms/Logo",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { Logo },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Logo/>',
});
