<template>
  <header>
    <div class="logo">Seu Logo</div>
    <form @submit.prevent="goToPage">
      <input
        type="text"
        class="search"
        placeholder="Digite a página desejada..."
        v-model="page"
      />
      <button type="submit" class="btn">Ir</button>
    </form>
  </header>
</template>

<script>
export default {
  props: {
    responseData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      page: "",
    };
  },
  methods: {
    goToPage() {
      const isGreaterThanZero = this.page > 0;
      const isPageWithinBounds = this.page <= this.responseData.totalPages;

      if (isGreaterThanZero && isPageWithinBounds) {
        this.$emit("update-page", this.page);
      }
    },
  },
};
</script>

<style scoped>
header {
  background-color: #333333;
  padding: 15px 20px;
  width: 100%;
  max-width: 80%;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #ffffff;
  font-size: 20px;
}

.search {
  width: 200px;
  padding: 8px;
  margin-right: 6px;
  border-radius: 6px;
  border: none;
}

.btn {
  background-color: #28a745;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #45a049;
}
</style>
