import Search from "./Search.vue";

export default {
  component: Search,
  title: "Components/Molecules/Search/InputSearch",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { Search },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Search v-bind="args"/>',
});
Default.args = {
  placeholder: "Type here to search...",
};
export const SearchWithSelectBox = (args) => ({
  components: { Search },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Search v-bind="args"/>',
});

SearchWithSelectBox.args = {
  placeholder: "Type here to search...",
  categoriesOptions: [
    { name: "Phones" },
    { name: "Laptops" },
    { name: "Cars" },
  ],
};
export const SearchWithSuggestions = (args) => ({
  components: { Search },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Search v-bind="args" />(MyPhone 8)',
});

SearchWithSuggestions.args = {
  placeholder: "Type here to search...",
  suggestions: [
    {
      location: `/`,
      image: `https://ibid.modeltheme.com/wp-content/uploads/2021/08/YouTube-Award-Kids-scaled-1-70x70.jpg`,
      title: `MyPhone 8`,
    },
  ],
};
