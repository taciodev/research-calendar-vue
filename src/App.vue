<template>
  <div class="background">
    <TheHeader :responseData="responseData" @update-page="getData" />
    <MainTitle />
    <div class="container">
      <PageNavigation :responseData="responseData" @update-page="getData" />
      <ResearchCalendar :items="responseData.items" />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MainTitle from "./components/MainTitle.vue";
import ResearchCalendar from "./components/ResearchCalendar.vue";
import PageNavigation from "./components/PageNavigation.vue";
import { HTTP } from "./plugins/axios";

export default {
  name: "App",
  components: {
    TheHeader,
    MainTitle,
    ResearchCalendar,
    PageNavigation,
  },
  data() {
    return {
      responseData: { page: null, items: [] },
    };
  },
  mounted() {
    this.getData(1);
  },
  methods: {
    getData(page) {
      HTTP.get(`?page=${page}`)
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--card-text-color);
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--first-layer);
}

.container {
  width: 80%;
  margin: 80px auto;
  padding: 20px;
}
</style>
