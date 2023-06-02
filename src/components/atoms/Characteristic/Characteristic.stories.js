import Characteristic from "./Characteristic.vue";

export default {
  component: Characteristic,
  title: "Components/Atoms/Characteristic",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { Characteristic },
  setup() {
    let image = require(`../../../assets/images/features/money.png`);
    //👇 The args will now be passed down to the template
    return { args, image };
  },
  template: '<Characteristic :imageSrc="image" v-bind="args" :title="`Feature`" :subtitle="`Amazing indeed`" />',
});

export const Statistic = (args) => ({
  components: { Characteristic },
  setup() {
    let image = require(`../../../assets/images/features/money.png`);
    //👇 The args will now be passed down to the template
    return { args, image };
  },
  template: '<Characteristic :imageSrc="image" v-bind="args" :title="`48,508`" :subtitle="`Products sold`" />',
});