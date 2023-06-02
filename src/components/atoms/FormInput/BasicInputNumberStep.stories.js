import BasicInputNumberStep from "./BasicInputNumberStep.vue";
import { ref } from 'vue'

export default {
  component: BasicInputNumberStep,
  title: "Components/Atoms/Form/BasicInputNumberStep",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { BasicInputNumberStep },
  setup() {
    let value = ref(0)
    //👇 The args will now be passed down to the template
    return { args, value };
  },

  template: `<BasicInputNumberStep v-model='value' v-bind="args"/>`,
});
