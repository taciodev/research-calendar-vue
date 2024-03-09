<template>
  <div class="parameters-container">
    <div class="form-group">
      <label for="qtd">Quantidade:</label>
      <input type="number" id="qtd" v-model="params.qtd" class="input-field" />
    </div>
    <div class="form-group">
      <label for="de">De:</label>
      <input type="date" id="de" v-model="params.de" class="input-field" />
    </div>
    <div class="form-group">
      <label for="ate">Até:</label>
      <input type="date" id="ate" v-model="params.ate" class="input-field" />
    </div>
    <button @click="sendDataMainComponent" class="btn btn-primary">
      Buscar Dados
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        qtd: null,
        de: null,
        ate: null,
      },
    };
  },
  methods: {
    sendDataMainComponent() {
      this.$emit("userParameter", this.params);
    },
  },
};
</script>

<style scoped>
.parameters-container {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.form-group {
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
}

.label {
  margin-right: 10px;
  font-weight: bold;
}

.input-field {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 180px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--primary-color-btn);
  color: #fff;
}

@media screen and (max-width: 600px) {
  .form-group {
    width: 100%;
  }
}
</style>
