

import BasicLabel from "./BasicLabel.vue";
import BasicInputError from "./BasicInputError.vue";
import BasicInputText from "./BasicInputText.vue";

export default {
  component: BasicLabel,
  subcomponents: { BasicInputError, BasicInputText },
  title: "Components/Atoms/Form",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const CompleteInputExample = (args) => ({
  components: { BasicLabel, BasicInputError, BasicInputText },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<basic-label><basic-input-error :error="'Error must be seen.'" ><BasicInputText :placeholder="'Enter Value'" /></basic-input-error></basic-label>`,
});

CompleteInputExample.args = {
  title: "New Label",
};
