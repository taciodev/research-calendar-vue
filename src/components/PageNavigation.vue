<template>
  <div class="page-navigation">
    <button
      @click="previousPage"
      :disabled="responseData.page === 1"
      class="navigation-button"
    >
      Anterior
    </button>
    <span class="page-number">{{ responseData.page }}</span>
    <button @click="nextPage" class="navigation-button">Próximo</button>
  </div>
</template>

<script>
export default {
  props: {
    responseData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    previousPage() {
      if (this.responseData.page > 1) {
        this.$emit("update-page", this.responseData.page - 1);
      }
    },
    nextPage() {
      this.$emit("update-page", this.responseData.page + 1);
    },
  },
};
</script>

<style scoped>
.page-navigation {
  background-color: var(--second-layer);
  border-radius: 6px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.navigation-button {
  background-color: var(--primary-color-btn);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

.navigation-button:disabled {
  background-color: var(--secondary-color-btn);
  cursor: not-allowed;
}

.page-number {
  font-weight: bold;
}
</style>
