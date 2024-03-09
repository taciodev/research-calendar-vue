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
          <p class="label">Período de referência:</p>
          <p>
            {{ divulgacao.mes_referencia_inicio }}/{{
              divulgacao.ano_referencia_inicio
            }}
            - {{ divulgacao.mes_referencia_fim }}/{{
              divulgacao.ano_referencia_fim
            }}
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
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

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
  .item-header h2 {
    font-size: 1.25rem;
  }
}
</style>
