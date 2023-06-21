import Breadcrumb from "./Breadcrumb.vue";
export default {
  component: Breadcrumb,
  title: "Components/Atoms/Breadcrumb",
  parameters: {
    backgrounds: { default: "light" },
  },
};
import { useStore } from "vuex";

export const Filled = (args) => ({
  components: { Breadcrumb },
  setup() {
    const store = useStore();
    store.commit("setLocation", [
      { title: "平台公告", location: "/announcement" },
      { title: "Blog Title Name", location: "/announcement/0" },
    ]);
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<Breadcrumb v-bind="args" />',
});
