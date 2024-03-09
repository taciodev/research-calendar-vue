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
      params: { qtd: 5, de: "2020-01-01", ate: "2024-03-08" },
      hasError: false,
    };
  },
  mounted() {
    this.getData(1);
  },
  methods: {
    getData(page) {
      const isParametersValid = validateParameters(this.params);
      let params = this.params;

      if (!isParametersValid) {
        params = { qtd: 5, de: "2020-01-01", ate: "2024-03-08" };
      }

      HTTP.get(`?page=${page}`, { params })
        .then((response) => {
          this.responseData = response.data;
        })
        .catch((error) => console.log(error));
    },
    receiveDataFromInput(data) {
      const dataWithoutProxy = { ...data };

      this.params = {
        qtd: dataWithoutProxy.qtd ? dataWithoutProxy.qtd : 5,
        de: dataWithoutProxy.de ? dataWithoutProxy.de : "2020-01-01",
        ate: dataWithoutProxy.ate ? dataWithoutProxy.ate : "2024-03-08",
      };

      const isParametersValid = validateParameters(this.params);
      this.hasError = !isParametersValid;

      if (isParametersValid) {
        this.getData(this.responseData.page);
      }
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

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
</style>
