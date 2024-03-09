<template>
  <div class="research-item">
    <div class="item-header">
      <h2>{{ item.titulo }}</h2>
      <p class="description">{{ item.descricao }}</p>
    </div>
    <div class="item-details">
      <div class="detail">
        <p class="label">Data de divulgação:</p>
        <p>{{ item.data_divulgacao }}</p>
      </div>
      <div class="detail">
        <p class="label">Produto:</p>
        <p>{{ item.nome_produto }}</p>
      </div>
      <div class="detail">
        <p class="label">Período de referência:</p>
        <p>
          {{ item.mes_referencia_inicio }}/{{ item.ano_referencia_inicio }} -
          {{ item.mes_referencia_fim }}/{{ item.ano_referencia_fim }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.research-item {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease;
}

.research-item:hover {
  transform: translateY(-5px);
}

.item-header {
  margin-bottom: 15px;
}

.item-header h2 {
  font-size: 1.3rem;
  margin-bottom: 5px;
}

.description {
  font-style: italic;
  color: #666;
}

.item-details {
  display: flex;
  flex-direction: column;
}

.detail {
  margin-bottom: 15px;
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333333;
}

.detail p {
  margin: 0;
}

.detail p:last-child {
  font-size: 0.9rem;
  color: #666666;
}
</style>
