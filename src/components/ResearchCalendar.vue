<template>
  <div class="research-calendar">
    <ResearchItem v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ResearchItem from "./ResearchItem.vue";

export default {
  components: {
    ResearchItem,
  },
  props: {
    items: Array,
  },
};
</script>

<style scoped>
.research-calendar {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

@media screen and (max-width: 1024px) {
  .research-calendar {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }
}

@media screen and (max-width: 767px) {
  .research-calendar {
    grid-template-columns: repeat(1, minmax(250px, 1fr));
  }
}

@media screen and (max-width: 425px) {
  .research-item h2 {
    font-size: 1.25rem;
  }
}
</style>
