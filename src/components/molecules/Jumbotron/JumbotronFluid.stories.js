import JumbotronFluid from "./JumbotronFluid.vue";
import image from "../../../assets/images/slider/ibid_automotive_slider.jpg"

export default {
  component: JumbotronFluid,
  title: "Components/Molecules/Jumbotron/Fluid",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen",
  },
};

export const Default = (args) => ({
  components: { JumbotronFluid },
  setup() {
    //👇 The args will now be passed down to the template
    return { args,image };
  },
  template: `<JumbotronFluid v-bind='args'/>`,
});
Default.args = {
  title: "Find your dream car",
  subtitle: "& give it a try",
  content:
    "Vivamus id ligula non turpis aliquam dignissim. Fusce tempor vulputate urna, quis malesuada.",
  imagePath: image,
};
