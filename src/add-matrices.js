import isMatrixOfNumbers from './is-matrix-of-numbers';

const addMatrices = (A, B) => {
  if (isMatrixOfNumbers(A) && isMatrixOfNumbers(B)) {
    if (A.length !== B.length || A[0].length !== B[0].length) return undefined;
    const C = new Array(A.length);
    for (let i = 0; i < A.length; i += 1) {
      C[i] = new Array(A[0].length);
      for (let j = 0; j < A[0].length; j += 1) {
        C[i][j] = A[i][j] + B[i][j];
      }
    }
    return C;
  }
  return undefined;
};

export default addMatrices;
