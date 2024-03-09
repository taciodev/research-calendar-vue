<template>
  <div class="background">
    <TheHeader :responseData="responseData" @update-page="getData" />
    <MainTitle />
    <div class="container">
      <PageNavigation :responseData="responseData" @update-page="getData" />
      <div v-if="hasError" class="error-message">Parâmetros inválidos.</div>
      <ParametersInput @userParameter="receiveDataFromInput" />
      <ResearchCalendar :items="responseData.items" />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MainTitle from "./components/MainTitle.vue";
import ResearchCalendar from "./components/ResearchCalendar.vue";
import PageNavigation from "./components/PageNavigation.vue";
import ParametersInput from "./components/ParametersInput.vue";
import { HTTP } from "./plugins/axios";
import { validateParameters } from "./utils/validateParameters";
import { formatDate } from "./utils/formatDate";

export default {
  name: "App",
  components: {
    TheHeader,
    MainTitle,
    ResearchCalendar,
    PageNavigation,
    ParametersInput,
  },
  data() {
    return {
      responseData: { page: null, items: [] },
      params: { qtd: 5, de: "2020-01-01", ate: formatDate(new Date()) },
      hasError: false,
    };
  },
  mounted() {
    this.getData(1);
  },
  methods: {
    async getData(page) {
      try {
        const params = validateParameters(this.params)
          ? this.params
          : { qtd: 5, de: "2020-01-01", ate: "2024-03-08" };
        const response = await HTTP.get(`?page=${page}`, { params });
        this.responseData = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    receiveDataFromInput(data) {
      const { qtd = 5, de = "2020-01-01", ate = "2024-03-08" } = data;
      this.params = { qtd, de, ate };
      this.hasError = !validateParameters(this.params);
      if (!this.hasError) this.getData(this.responseData.page);
    },
  },
};
</script>

<style>
body {
  font-family: Poppins, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--first-layer);
  color: var(--card-text-color);
}

.container {
  width: 80%;
  margin: 80px auto;
  padding: 20px;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
</style>
