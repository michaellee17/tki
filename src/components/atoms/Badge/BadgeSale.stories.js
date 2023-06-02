import BadgeSale from "./BadgeSale.vue";
export default {
  component: BadgeSale,
  title: "Components/Atoms/Badge",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Sale = (args) => ({
  components: { BadgeSale },
  setup() {

    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<BadgeSale :text="`Sale`" />',
});
