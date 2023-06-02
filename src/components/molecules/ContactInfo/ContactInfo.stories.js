import ContactInfo from "./ContactInfo.vue";

export default {
  component: ContactInfo,
  title: "Components/Molecules/ContactInfo",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { ContactInfo },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: "<ContactInfo />",
});
