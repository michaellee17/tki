

import BasicInputText from "./BasicInputText.vue";

export default {
  component: BasicInputText,
  title: "Components/Atoms/Form/Text",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const OnButton = (args) => ({
  components: { BasicInputText },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<basic-input-text v-bind="args"></basic-input-text>',
});

OnButton.args = {
    placeholder: 'Enter your name here'
}