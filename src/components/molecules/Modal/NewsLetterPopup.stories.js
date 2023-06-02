import NewsLetterPopup from "./NewsLetterPopup.vue";

export default {
  component: NewsLetterPopup,
  title: "Components/Molecules/Modal/NewsLetterPopup",
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Default = (args) => ({
  components: { NewsLetterPopup },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `    
  <NewsLetterPopup style="width:60%;" class="mx-auto" v-bind="args"/>`,
});