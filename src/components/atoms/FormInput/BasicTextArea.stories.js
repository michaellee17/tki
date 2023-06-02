import BasicTextArea from "./BasicTextArea.vue";

export default {
  component: BasicTextArea,
  title: "Components/Atoms/Form/TextArea",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { BasicTextArea},
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<BasicTextArea class="form-control border-0 border-bottom rounded-0 border-anim" v-bind="args"/>`,
});
Default.args= {
  placeholder: 'Enter your text here.'
}