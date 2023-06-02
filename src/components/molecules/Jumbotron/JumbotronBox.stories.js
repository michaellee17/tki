import JumbotronBox from "./JumbotronBox.vue";

export default {
  component: JumbotronBox,
  title: "Components/Molecules/Jumbotron/Box",
  parameters: {
    backgrounds: { default: "light" },
    layout: "fullscreen"
  },
};

export const Default = (args) => ({
  components: { JumbotronBox },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<JumbotronBox v-bind='args'/>`,
});
Default.args = {
  title: "About Us",
  text: "Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline. Quickly maximize timely deliverables for real-time schemas. <br/> Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed the start-up mentality to derive convergence." ,
}