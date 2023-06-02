import BasicInputError from "./BasicInputError.vue";
import BasicInputText from "./BasicInputText.vue";

export default {
  component: BasicInputError,
  title: "Components/Atoms/Form/InputError",
  subcomponents: { BasicInputText },
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { BasicInputError,BasicInputText},
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<basic-input-error v-bind="args" ></basic-input-error>`,
});

Default.args = {
  error: 'Error must be seen',
}

export const ErrorWithInputField = (args) => ({
  components: { BasicInputError,BasicInputText},
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<basic-input-error v-bind="args" ><BasicInputText placeholder="Dummy text input" /></basic-input-error>`,
});

ErrorWithInputField.args = {
  error: 'Error must be seen',
}