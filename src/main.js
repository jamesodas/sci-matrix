import addMatrices from './add-matrices';
import Matrix from './type/matrix';

const A = new Matrix([[1, 0], [0, 0]]);
const B = new Matrix([[0, 0], [0, 1]]);
// const C = new Matrix(3, 3);

const D = addMatrices(A, B);

console.log(D);
console.log(D.rows);
console.log(D.columns);
console.log(D.type);
console.log(D.identity);

export default Matrix;
