import CardTeamMember from "./CardTeamMember.vue";

export default {
  component: CardTeamMember,
  title: "Components/Molecules/Card/TeamMember",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { CardTeamMember },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<CardTeamMember v-bind="args" />',
});
Default.args = {
  imageSrc:
  "/images/membersteam/member-pic1.png",
  name: "Andrew Matei",
  occupation: "Web developer",
  socials: [
    { location: "/", icon: "facebook" },
    { location: "/", icon: "twitter" },
    { location: "/", icon: "behance" },
  ],
};
