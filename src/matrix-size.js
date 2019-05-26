import isMatrix from './type/helpers/is-matrix';

const matrixSize = (matriz) => {
  if (!Array.isArray(matriz)) return undefined;
  if (!isMatrix(matriz)) return undefined;
  const size = new Array(2);
  size[0] = matriz.length;
  size[1] = matriz[0].length;
  if (size[0] === undefined || size[1] === undefined) return undefined;
  return size;
};

export default matrixSize;
