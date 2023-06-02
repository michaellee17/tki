import BasicInputSearch from "./BasicInputSearch.vue";
import { countries } from "./assets/countries.json";
import { ref } from 'vue'

export default {
  component: BasicInputSearch,
  title: "Components/Atoms/Form/InputSearch",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { BasicInputSearch },
  setup() {
    let value = ref('')
    //👇 The args will now be passed down to the template
    return { args, value };
  },

  template: `<BasicInputSearch v-model='value' v-bind="args"/>`,
});

Default.args = {
  matchKey: "name",
  items: countries,
};
