export function validateParameters(params) {
  if (params.qtd < 1 || params.qtd > 25) {
    return false;
  }

  const dataDe = new Date(params.de);
  const dataAte = new Date(params.ate);

  if (dataAte <= dataDe) {
    return false;
  }

  return true;
}
