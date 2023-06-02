<template>
  <div class="Menu fluid-container d-flex justify-content-start mx-auto mt-4">
    <ul class="item-searched  d-flex flex-column rounded pt-3 pb-3 ">
      <li
        class="item-found d-inline-flex mt-3"
        v-for="suggestion in suggestions"
        :key="suggestion"
      >
        <router-link :to="suggestion.location">
          <img class="img-thumbnail" :src="suggestion.image" :alt="suggestion.title" />
          <span class="align-self-center ms-2 ">{{ suggestion.title }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    suggestions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped="scoped">
.item-found img {
  width: 60px;
 
}
.Menu {
  box-shadow: 0 0 25px rgb(0 0 0 / 10%);
  width: 300px;
}
</style>
