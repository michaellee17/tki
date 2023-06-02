import LogoWithMessage from "./LogoWithMessage.vue";

export default {
  component: LogoWithMessage,
  title: "Components/Molecules/LogoWithMessage",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { LogoWithMessage },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: `<LogoWithMessage style="width:700px;" v-bind='args'/>`,
});
Default.args = {
  message:
    "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms.  ",
};
