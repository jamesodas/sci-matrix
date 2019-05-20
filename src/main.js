import addMatrices from './add-matrices';
import Matrix from './matrix';

const A = new Matrix([[3, 2], [3, 1]]);
const B = new Matrix([[1, 1], [1, 1]]);

console.log(addMatrices(A, B));

export default Matrix;
