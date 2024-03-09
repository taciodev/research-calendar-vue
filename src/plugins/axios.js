import axios from "axios";

// TODO: CRIAR FUNÇÃO QUE FAÇA ESSE PROCESSO DE FORMATAÇÃO DA DATA
var currentDate = new Date();

var year = currentDate.getFullYear();
var month =
  currentDate.getMonth().length === 2
    ? currentDate.getMonth()
    : `0${currentDate.getMonth()}`; // Adiciona 1 ao mês, pois o mês é baseado em zero
var date =
  currentDate.getDay().length === 2
    ? currentDate.getDay()
    : `0${currentDate.getDay()}`;

var formattedCurrentDate = `${year}-${month}-${date}`;

export const HTTP = axios.create({
  baseURL: `https://servicodados.ibge.gov.br/api/v3/calendario/`,
  params: {
    qtd: 5,
    de: "2020-01-01",
    ate: formattedCurrentDate,
  },
  // headers: {
  //   Authorization: "Bearer {token}",
  // },
});
