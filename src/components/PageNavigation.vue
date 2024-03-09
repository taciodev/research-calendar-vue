<template>
  <div class="page-navigation">
    <button @click="previousPage" :disabled="responseData.page === 1">
      Anterior
    </button>
    <span>{{ responseData.page }}</span>
    <button @click="nextPage">Próximo</button>
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
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
