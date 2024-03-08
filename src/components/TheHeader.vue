<template>
  <header>
    <div class="logo">Seu Logo</div>
    <form>
      <input
        type="text"
        class="search"
        placeholder="Digite a página desejada..."
      />
      <button type="submit" class="btn">Ir</button>
    </form>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: transparent;
  padding: 20px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo {
  color: #000000;
  font-size: 24px;
}
.search {
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: none;
}
.btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.btn:hover {
  background-color: #45a049;
}
</style>
