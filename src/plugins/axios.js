import axios from "axios";

export const HTTP = axios.create({
  baseURL: `https://servicodados.ibge.gov.br/api/v3/calendario/`,
});
