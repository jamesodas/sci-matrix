import isLowerTriangular from './is-lower-triangular';
import isUpperTriangular from './is-upper-triangular';

const isDiagonal = (A) => {
  return isLowerTriangular(A) && isUpperTriangular(A);
};

module.exports = isDiagonal;
    