<template>
  <div class="d-flex flex-column">
    <Heading :title="'Our Team'" />
    <div
      class="team-members d-flex flex-row justify-content-center align-items-center"
    >
      <div class="member me-4" v-for="member in members" :key="member">
        <OurTeamCard v-bind="member" />
      </div>
    </div>
  </div>
</template>
<script>
import Heading from "../../atoms/SectionHeading/Heading.vue";
import OurTeamCard from "../../molecules/Card/CardTeamMember.vue";

import { members } from "../../../data/team.json";
export default {
  components: {
    OurTeamCard,
    Heading,
  },
  data() {
    return {
      members,
    };
  },
};
</script>
