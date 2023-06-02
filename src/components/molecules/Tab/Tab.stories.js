import TabWrapper from "./TabWrapper.vue";
import TabContent from "./TabContent.vue";

export default {
  component: TabContent,
  subcomponents: {TabWrapper},
  title: "Components/Molecules/Tab",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { TabWrapper, TabContent },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `              
  <tab-wrapper>
    <tab-content :title="'Description'">Hello from tab Description</tab-content>
    <tab-content :title="'Additional Information'">Hello from tab Additional Information</tab-content>
    <tab-content :title="'Auction History'">Hello from tab Auction History</tab-content>
    <tab-content :title="'Vendor Info'">Hello from tab Vendor Info</tab-content>
    <tab-content :title="'More from Vendor'">Hello from tab More from Vendor</tab-content>
  </tab-wrapper>`,
});
