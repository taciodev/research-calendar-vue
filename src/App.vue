<template>
  <div class="background">
    <TheHeader />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa; /*  #f5f5f5 #ffffff */
}

.container {
  /* background-color: #d6d6d6; */
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  width: 80%;
  margin: 80px auto;
  padding: 20px;
  border-radius: 8px;
}
</style>
