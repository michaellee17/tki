import BlogContent from "./BlogContent.vue";

export default {
  component: BlogContent,
  title: "Components/Molecules/Blog/Content",
  parameters: {
    backgrounds: { default: "light" },
    layout: "padded",
  },
};

export const Default = (args) => ({
  components: { BlogContent },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<BlogContent style="width:500px;" v-bind="args" />',
});

Default.args = {
  id: 1,
  thumbNail:
    "/images/blogpost/blogpost1.jpg",
  title: "A Phone Keeps Your Friends Away",
  content:
    "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. <br/> When a cat is frightened, its pupils grow bigger. This is to allow the cat to absorb as much information as possible. When the cat is angry or aroused, its pupils narrow in order to enable it to zoom in on tiny details. Do note, however, that since cats? pupils also change size according to the light, you should pay attention to its body language when trying to figure out how it is feeling. <br/> Mewing isn???t the only sounds cats make. Mother cats are often heard making a chirping noise when they are with their kittens. This is their way of getting the attention of their kittens and communicating with them. Occasionally, you might hear your own cat using this sound on you when trying to get you to top up her feeding bowl. <br/> If you hear a cat hissing, spitting or growling, stay away, as that indicates it is frightened or angry and might react in an aggressive manner if you get too close.",
  authorDetails: {
    authorName: "Anne Marie",
    category: "Laptops",
    date: "August 9, 2021",
  },
  date: "August 9, 2021",
};
