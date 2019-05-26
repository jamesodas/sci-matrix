import isMatrix from './type/helpers/is-matrix';

const multiplyMatrixByScalar = (A, b) => {
  if (isMatrix(A) && typeof b === 'number') {
    const C = new Array(A.length);
    for (let i = 0; i < A.length; i += 1) {
      C[i] = new Array(A[0].length);
      for (let j = 0; j < A[0].length; j += 1) {
        C[i][j] = A[i][j] * b;
      }
    }
    return C;
  }
  return undefined;
};

export default multiplyMatrixByScalar;
