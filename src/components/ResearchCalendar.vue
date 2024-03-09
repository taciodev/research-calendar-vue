<template>
  <div class="research-calendar">
    <div v-for="divulgacao in items" :key="divulgacao.id" class="research-item">
      <div class="item-header">
        <h2>{{ divulgacao.titulo }}</h2>
        <p class="description">{{ divulgacao.descricao }}</p>
      </div>
      <div class="item-details">
        <div class="detail">
          <p class="label">Data de divulgação:</p>
          <p>{{ divulgacao.data_divulgacao }}</p>
        </div>
        <div class="detail">
          <p class="label">Produto:</p>
          <p>{{ divulgacao.nome_produto }}</p>
        </div>
        <div class="detail">
          <p class="label">Ano de referência:</p>
          <p>
            {{ divulgacao.ano_referencia_inicio }} -
            {{ divulgacao.ano_referencia_fim }}
          </p>
        </div>
        <div class="detail">
          <p class="label">Mês de referência:</p>
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
.research-calendar {
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.research-item {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.item-header {
  margin-bottom: 10px;
}

.description {
  font-style: italic;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.detail {
  margin-bottom: 10px;
}

.label {
  font-weight: bold;
}
</style>
