const isMatrix = (matriz) => {
  if (!Array.isArray(matriz)) return false;
  return matriz.reduce((valorMatrizValida, elem, i, array) => {
    let matrizValida = valorMatrizValida;
    matrizValida = matrizValida ? elem.length === array[i - 1].length : false;
    return matrizValida;
  });
};

export default isMatrix;
