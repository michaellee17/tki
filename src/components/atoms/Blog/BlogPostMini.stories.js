import BlogPostMini from "./BlogPostMini.vue";
import image from "../../../assets/images/blogpost/blogpost1.jpg"

export default {
  component: BlogPostMini,
  title: "Components/Atoms/Blog/PostMini",
  parameters: {
    backgrounds: { default: 'light' }
  }
};

export const Default = (args) => ({
  components: { BlogPostMini },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<BlogPostMini style="width:300px;" class="col-md-12" v-bind="args" />',
});

Default.args = {
  thumbNail: image,
  title: 'Chromebook Tab 10 review',
  desc: 'Bring to the table win-win survival strategies to ensure…'
}