import BlogComment from "./BlogComment.vue";

export default {
  component: BlogComment,
  title: "Components/Molecules/Blog/Comment",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const Default = (args) => ({
  components: { BlogComment },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<BlogComment style="width:500px;" v-bind="args" />',
});

Default.args = {
  id: 1,
  authorAvatar: "https://secure.gravatar.com/avatar/636d543ce62c54a839d96cfc60a253df?s=130&d=mm&r=g",
  thumbNail: "",
  content: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  authorName: "Adrian Martin",
  date: "August 9, 2021",
  isApproved: true
};

export const CanReply = (args) => ({
  components: { BlogComment },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<BlogComment style="width:500px;" v-bind="args" />',
});

CanReply.args = {
  id: 1,
  authorAvatar: "https://secure.gravatar.com/avatar/636d543ce62c54a839d96cfc60a253df?s=130&d=mm&r=g",
  canReply: true,
  content: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  authorName: "Adrian Martin",
  date: "August 9, 2021",
  isApproved: true
};

export const AwaitingModeration = (args) => ({
  components: { BlogComment },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<BlogComment style="width:500px;" v-bind="args" />',
});

AwaitingModeration.args = {
  id: 1,
  authorAvatar: "https://secure.gravatar.com/avatar/636d543ce62c54a839d96cfc60a253df?s=130&d=mm&r=g",
  content: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  authorName: "Adrian Martin",
  date: "August 9, 2021",
  isApproved: false
};

