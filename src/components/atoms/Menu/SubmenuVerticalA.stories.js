import SubmenuVerticalA from "./SubmenuVerticalA.vue";

export default {
  component: SubmenuVerticalA,
  title: "Components/Atoms/Menu/SubmenuTypeA",
  parameters: {
    backgrounds: { default: "light" },
    layout: "padded",
  },
};

export const Default = (args) => ({
  components: { SubmenuVerticalA },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `          
  <div class="position-relative" style="width:100px;">
    <SubmenuVerticalA :class="{active : active}" v-bind="args"/>
  </div>`,
});

Default.args = {
  items: [
    {
      name: "IT & COMPUTERS",
      links: [
        { location: "/", name: "Laptops", icon: "laptop" },
        { location: "/", name: "Desktops", icon: "desktop" },
      ],
    },
    {
      name: "Wearable",
      links: [
        { location: "/", name: "Smart Watches", icon: "clock" },
        { location: "/", name: "Fitness Bracelets", icon: "stopwatch" },
      ],
    },
    {
      name: "Phones",
      links: [
        { location: "/", name: "Phone Cases", icon: "mobile" },
        { location: "/", name: "Android Smartphones", icon: "phone" },
        { location: "/", name: "Chargers", icon: "battery-full" },
      ],
    },
  ],
};
