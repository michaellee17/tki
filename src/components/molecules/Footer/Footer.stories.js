import Footer from "./Footer.vue";

export default {
  component: Footer,
  title: "Components/Molecules/Footer",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Footer },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: "<Footer style='width:100%;'/>",
});
