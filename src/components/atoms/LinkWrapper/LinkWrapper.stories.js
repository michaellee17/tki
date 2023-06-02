

import LinkWrapper from "./LinkWrapper.vue";
import ButtonFilled from "../Button/ButtonFilled.vue";

export default {
  component: LinkWrapper,
  subcomponents: { ButtonFilled },
  title: "Components/Atoms/LinkWrapper",
};

export const OnButton = (args) => ({
  components: { LinkWrapper, ButtonFilled },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<link-wrapper v-bind="args"><ButtonFilled v-bind="args" /></link-wrapper>',
});
