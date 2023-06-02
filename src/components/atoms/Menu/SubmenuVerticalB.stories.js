import SubmenuVerticalB from "./SubmenuVerticalB.vue";

export default {
  component: SubmenuVerticalB,
  title: "Components/Atoms/Menu/SubmenuTypeB",
  parameters: {
    backgrounds: { default: "light" },
    layout: "padded",
  },
};

export const Default = (args) => ({
  components: { SubmenuVerticalB },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `          
  <div class="position-relative" style="width:fit-content;">
    <SubmenuVerticalB :class="{active : active}" v-bind="args"/>
  </div>`,
});
