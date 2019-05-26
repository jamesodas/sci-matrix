// import addMatrices from './add-matrices';
import Matrix from './type/matrix';
import isMatrix from './type/helpers/is-matrix';

// const A = new Matrix([[1, 0], [0, 0]]);
// const B = new Matrix([[0, 0], [1, 1]]);
const C = new Matrix([[1, 0, 0], [0, 4, 0], [0, 0, 1]]);

// const D = addMatrices(A, B);

// const E = new Matrix([1, 0, 1]);

// console.log("isColumn ", isColumn(E));

// console.log(Array.isArray(C));
// console.log(typeof C);
// console.log(C instanceof Array);
// console.log(C.constructor);

// console.log(C);
console.log(isMatrix(C));

// console.log(C);
// console.log(D);
// console.log(D.rows);
// console.log(D.columns);
// console.log(D.type);
// console.log(D.identity);

export default Matrix;
