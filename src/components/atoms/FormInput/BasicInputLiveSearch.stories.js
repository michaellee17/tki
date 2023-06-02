import BasicInputLiveSearch from "./BasicInputLiveSearch.vue";
import { countries } from "./assets/countries.json";
import { ref } from 'vue'

export default {
  component: BasicInputLiveSearch,
  title: "Components/Atoms/Form/LiveSearch",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { BasicInputLiveSearch },
  setup() {
    let value = ref('')
    //👇 The args will now be passed down to the template
    return { args, value };
  },

  template: `<BasicInputLiveSearch v-model='value' v-bind="args"/>`,
});

Default.args = {
  matchKey: "name",
  items: countries,
  placeHolder: "Type here to search..."
};
