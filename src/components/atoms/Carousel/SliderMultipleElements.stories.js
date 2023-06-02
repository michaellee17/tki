import SliderMultipleElements from "./SliderMultipleElements.vue";
import image1 from "../../../assets/images/brands/client1.png";
import image2 from "../../../assets/images/brands/client2.png";
export default {
  component: SliderMultipleElements,
  title: "Components/Atoms/Slider/SliderWithMultipleElements",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen",
  },
};

export const Default = (args) => ({
  components: { SliderMultipleElements },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<SliderMultipleElements v-bind="args" />',
});

Default.args = {
  items: [
    {
      name: "Tech Brand",
      imageSrc: image1,
    },
    {
      name: "TechCompany",
      imageSrc: image2,
    },
    {
      name: "Tech Brand",
      imageSrc: image1,
    },
    {
      name: "TechCompany",
      imageSrc: image2,
    },
    {
      name: "Tech Brand",
      imageSrc: image1,
    },
    {
      name: "TechCompany",
      imageSrc: image2,
    },
    {
      name: "TechCompany",
      imageSrc: image2,
    },
    {
      name: "TechCompany",
      imageSrc: image2,
    },
    {
      name: "TechCompany",
      imageSrc: image2,
    },
  ],
};
