import MessageError from "./MessageError.vue";

export default {
  component: MessageError,
  title: "Components/Atoms/Message/MessageError",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { MessageError },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<MessageError v-bind="args" />',
});

Default.args = {
  text: 'Something has gone wrong! We apologize for the inconvenience.'
}