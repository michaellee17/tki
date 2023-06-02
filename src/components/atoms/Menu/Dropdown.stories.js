import Dropdown from "./Dropdown.vue";

export default {
  component: Dropdown,
  title: "Components/Atoms/Menu/Dropdown",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Dropdown },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `          
  <ul
    class="currency-language m-0 d-flex list-unstyled menu-list"
  >
    <dropdown :items="args.langs" :eventToEmit="'onLanguageChange'"></dropdown>
  </ul>`,
});

Default.args = {
  langs: ["EN", "GE", "FR"],
};
