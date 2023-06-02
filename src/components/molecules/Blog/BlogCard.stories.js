import BlogCard from "./BlogCard.vue";

export default {
  component: BlogCard,
  title: "Components/Molecules/Blog/Card",
  parameters: {
    backgrounds: { default: "light" },
  },
};

export const WithoutThumbnail = (args) => ({
  components: { BlogCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<BlogCard style="width:700px;" v-bind="args" />',
});

WithoutThumbnail.args = {
  id: 1,
  title: "Chromebook Tab 10 review",
  thumbNail: "",
  shortDesc: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  authorDetails: {
    authorName: "Daniel Petron",
    category: "Laptops",
    date: "August 9, 2021",
  },
  location: ""
};


export const WithThumbnail = (args) => ({
  components: { BlogCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<BlogCard style="width:700px;" v-bind="args" />',
});

WithThumbnail.args = {
  id: 1,
  title: "Chromebook Tab 10 review",
  thumbNail:     "/images/blogpost/blogpost1.jpg",
  shortDesc: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  authorDetails: {
    authorName: "Daniel Petron",
    category: "Laptops",
    date: "August 9, 2021",
  },
  location: ""
};


export const Pinned = (args) => ({
  components: { BlogCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template:
    '<BlogCard style="width:700px;" v-bind="args" />',
});
Pinned.args = {
  id: 1,
  title: "Chromebook Tab 10 review",
  thumbNail: "/images/blogpost/blogpost3.jpg",
  shortDesc: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.",
  authorDetails: {
    authorName: "Daniel Petron",
    category: "Laptops",
    date: "August 9, 2021",
  },
  pinned: true,
  location: ""
};