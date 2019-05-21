import addMatrices from './add-matrices';
import Matrix from './type/matrix';

const A = new Matrix([[1, 0], [0, 0]]);
const B = new Matrix([[0, 0], [0, 1]]);
const C = new Matrix(3, 3).setIdentity();
const D = new Matrix(3, 2);

console.log(A[0][0]);

console.log(addMatrices(A, B));

console.log(C);

console.log(D);

export default Matrix;
