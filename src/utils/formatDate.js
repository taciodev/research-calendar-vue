export function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adiciona zero à esquerda se for necessário
  const day = date.getDate().toString().padStart(2, "0"); // Adiciona zero à esquerda se for necessário

  return `${year}-${month}-${day}`;
}
