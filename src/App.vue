<template>
  <div class="background">
    <TheHeader />
    <MainTitle />
    <div class="container">
      <!-- Conteúdo do container aqui -->
      <p>Este é um container com um fundo diferente e uma sombra.</p>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import MainTitle from "./components/MainTitle.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    MainTitle,
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
  margin-top: 60px;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #e6e6e6; /* Cor de fundo do body */
}

.container {
  background-color: white;
  width: 80%;
  margin: 50px auto; /* Espaçamento maior para o container */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
}
</style>
