import MessageWithAction from "./MessageWithAction.vue";
import ButtonFilled from "../Button/ButtonFilled.vue";
import BasicInputText from "../FormInput/BasicInputText.vue";

export default {
  component: MessageWithAction,
  subcomponents: {ButtonFilled, BasicInputText},
  title: "Components/Atoms/Message/Message With Action",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { MessageWithAction, ButtonFilled, BasicInputText },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<message-with-action v-bind="args" ><template v-slot:action><div class="d-flex align-items-center mt-4"><BasicInputText :placeholder="`Write your code here`"/></BasicInputText><ButtonFilled class="ms-2" :text="`Apply`"></ButtonFilled></div></template></message-with-action>',
});

Default.args = {
  title: "Write below your coupon code and press `Apply` to apply it.",
  infoText: "Have a coupon?",
};
