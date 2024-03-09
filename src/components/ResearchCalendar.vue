<template>
  <div class="divulgacoes">
    <div v-for="divulgacao in items" :key="divulgacao.id" class="divulgacao">
      <h2>{{ divulgacao.titulo }}</h2>
      <p class="descricao">{{ divulgacao.descricao }}</p>
      <div class="info">
        <div class="item">
          <p>Data de divulgação:</p>
          <p>{{ divulgacao.data_divulgacao }}</p>
        </div>
        <div class="item">
          <p>Produto:</p>
          <p>{{ divulgacao.nome_produto }}</p>
        </div>
        <div class="item">
          <p>Ano de referência:</p>
          <p>
            {{ divulgacao.ano_referencia_inicio }} -
            {{ divulgacao.ano_referencia_fim }}
          </p>
        </div>
        <div class="item">
          <p>Mês de referência:</p>
          <p>
            {{ divulgacao.mes_referencia_inicio }} -
            {{ divulgacao.mes_referencia_fim }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Array,
  },
};
</script>

<style scoped>
.divulgacoes {
  display: flex;
  flex-wrap: wrap;
}

.divulgacao {
  width: 45%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.descricao {
  font-style: italic;
}

.info {
  display: flex;
  flex-direction: column;
}

.item {
  margin-top: 5px;
}

.item p {
  margin: 0;
}
</style>
