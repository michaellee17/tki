import Counter from "./Counter.vue";
export default {
  component: Counter,
  title: "Components/Atoms/Counter",
};

export const Default = (args) => ({
  components: { Counter },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Counter v-bind="args" />',
});
var date = new Date();
date.setDate(date.getDate() + 7);

Default.args = {
    endDate: date
}