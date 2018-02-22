import isMatrix from './is-matrix';

const isMatrixOfNumbers = (array) => {
  if (!isMatrix(array)) return false;
  for (let i = 0; i < array.length; i += 1) {
    if (!Array.isArray(array[i])) return false;
    for (let j = 0; j < array[i].length; j += 1) {
      if (typeof array[i][j] !== 'number') return false;
    }
  }
  return true;
};

export default isMatrixOfNumbers;
